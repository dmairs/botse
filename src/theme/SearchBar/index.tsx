/**
 * Custom SearchBar component that wraps the Algolia DocSearch with a
 * persistent AI search toggle. The user's preference is stored in
 * localStorage so it survives page reloads.
 *
 * Based on @docusaurus/theme-search-algolia SearchBar source.
 */

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { DocSearchButton } from "@docsearch/react/button";
import { useDocSearchKeyboardEvents } from "@docsearch/react/useDocSearchKeyboardEvents";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import {
  isRegexpStringMatch,
  useSearchLinkCreator,
} from "@docusaurus/theme-common";
import {
  useAlgoliaContextualFacetFilters,
  useSearchResultUrlProcessor,
  useAlgoliaAskAi,
  mergeFacetFilters,
} from "@docusaurus/theme-search-algolia/client";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import translations from "@theme/SearchTranslations";
import type {
  InternalDocSearchHit,
  DocSearchModal as DocSearchModalType,
  DocSearchModalProps,
  StoredDocSearchHit,
  DocSearchTransformClient,
  DocSearchHit,
  DocSearchTranslations,
  UseDocSearchKeyboardEventsProps,
} from "@docsearch/react";

import type { AutocompleteState } from "@algolia/autocomplete-core";
import type { FacetFilters } from "algoliasearch/lite";
import type { ThemeConfigAlgolia } from "@docusaurus/theme-search-algolia";

const AI_SEARCH_STORAGE_KEY = "botse-search-ai-enabled";

type DocSearchProps = Omit<
  DocSearchModalProps,
  "onClose" | "initialScrollY"
> & {
  contextualSearch?: string;
  externalUrlRegex?: string;
  searchPagePath: boolean | string;
  askAi?: Exclude<
    (DocSearchModalProps & { askAi: unknown })["askAi"],
    string | undefined
  >;
};

// extend DocSearchProps for v4 features
// TODO Docusaurus v4: cleanup after we drop support for DocSearch v3
// @ts-expect-error: AskAiConfig.searchParameters.facetFilters (FacetFilters)
// is wider than DocSearchAskAi's string[] — acceptable version-mismatch shim
// between @docsearch/react v4 and @docusaurus/theme-search-algolia v3.
// TODO: remove once Docusaurus drops DocSearch v3 support (see Docusaurus v4).
interface DocSearchV4Props extends DocSearchProps {
  indexName: string;
  askAi?: ThemeConfigAlgolia["askAi"];
  translations?: DocSearchTranslations;
}

let DocSearchModal: typeof DocSearchModalType | null = null;

function importDocSearchModalIfNeeded() {
  if (DocSearchModal) {
    return Promise.resolve();
  }
  return Promise.all([
    import("@docsearch/react/modal"),
    import("@docsearch/react/style"),
    import("./styles.css"),
  ]).then(([{ DocSearchModal: Modal }]) => {
    DocSearchModal = Modal;
  });
}

function useNavigator({
  externalUrlRegex,
}: Pick<DocSearchProps, "externalUrlRegex">) {
  const history = useHistory();
  const [navigator] = useState<DocSearchModalProps["navigator"]>(() => {
    return {
      navigate(params) {
        // Algolia results could contain URL's from other domains which cannot
        // be served through history and should navigate with window.location
        if (isRegexpStringMatch(externalUrlRegex, params.itemUrl)) {
          window.location.href = params.itemUrl;
        } else {
          history.push(params.itemUrl);
        }
      },
    };
  });
  return navigator;
}

function useTransformSearchClient(): DocSearchModalProps["transformSearchClient"] {
  const {
    siteMetadata: { docusaurusVersion },
  } = useDocusaurusContext();
  return useCallback(
    (searchClient: DocSearchTransformClient) => {
      searchClient.addAlgoliaAgent("docusaurus", docusaurusVersion);
      return searchClient;
    },
    [docusaurusVersion]
  );
}

function useTransformItems(props: Pick<DocSearchProps, "transformItems">) {
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const [transformItems] = useState<DocSearchModalProps["transformItems"]>(
    () => {
      return (items: DocSearchHit[]) =>
        props.transformItems
          ? // Custom transformItems
            props.transformItems(items)
          : // Default transformItems
            items.map((item) => ({
              ...item,
              url: processSearchResultUrl(item.url),
            }));
    }
  );
  return transformItems;
}

function useResultsFooterComponent({
  closeModal,
}: {
  closeModal: () => void;
}): DocSearchProps["resultsFooterComponent"] {
  return useMemo(
    () =>
      ({ state }) =>
        <ResultsFooter state={state} onClose={closeModal} />,
    [closeModal]
  );
}

function Hit({
  hit,
  children,
}: {
  hit: InternalDocSearchHit | StoredDocSearchHit;
  children: ReactNode;
}) {
  return <Link to={hit.url}>{children}</Link>;
}

type ResultsFooterProps = {
  state: AutocompleteState<InternalDocSearchHit>;
  onClose: () => void;
};

function ResultsFooter({ state, onClose }: ResultsFooterProps) {
  const createSearchLink = useSearchLinkCreator();

  return (
    <Link to={createSearchLink(state.query)} onClick={onClose}>
      <Translate
        id="theme.SearchBar.seeAll"
        values={{ count: state.context.nbHits }}
      >
        {"See all {count} results"}
      </Translate>
    </Link>
  );
}

function useSearchParameters({
  contextualSearch,
  ...props
}: DocSearchProps): DocSearchProps["searchParameters"] {
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();

  const configFacetFilters: FacetFilters =
    props.searchParameters?.facetFilters ?? [];

  const facetFilters: FacetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters;

  // We let users override default searchParameters if they want to
  return {
    ...props.searchParameters,
    facetFilters,
  };
}

function useAiSearchPreference(): [boolean, () => void] {
  // Default to true for SSR safety; corrected from localStorage after mount.
  const [aiEnabled, setAiEnabled] = useState<boolean>(true);

  useEffect(() => {
    const stored = localStorage.getItem(AI_SEARCH_STORAGE_KEY);
    if (stored !== null) {
      setAiEnabled(stored === "true");
    }
  }, []);

  const toggle = useCallback(() => {
    setAiEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(AI_SEARCH_STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  return [aiEnabled, toggle];
}

type AiToggleButtonProps = {
  enabled: boolean;
  onToggle: () => void;
};

function AiToggleButton({ enabled, onToggle }: AiToggleButtonProps) {
  return (
    <button
      type="button"
      className={`search-ai-toggle${enabled ? " search-ai-toggle--enabled" : " search-ai-toggle--disabled"}`}
      onClick={onToggle}
      title={
        enabled
          ? "AI search is enabled — click to disable"
          : "AI search is disabled — click to enable"
      }
      aria-label={enabled ? "Disable AI search" : "Enable AI search"}
      aria-pressed={enabled}
    >
      AI
    </button>
  );
}

function DocSearch({
  externalUrlRegex,
  aiEnabled,
  ...props
}: DocSearchV4Props & { aiEnabled: boolean }) {
  // When the user has disabled AI search, strip the askAi prop so the
  // DocSearch modal does not render the "Ask AI" button at all.
  const effectiveProps: DocSearchV4Props = aiEnabled
    ? props
    : { ...props, askAi: undefined };

  const navigator = useNavigator({ externalUrlRegex });
  const searchParameters = useSearchParameters({
    ...(effectiveProps as DocSearchProps),
  });
  const transformItems = useTransformItems(effectiveProps);
  const transformSearchClient = useTransformSearchClient();

  const searchContainer = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(
    undefined
  );

  const { isAskAiActive, currentPlaceholder, onAskAiToggle, extraAskAiProps } =
    useAlgoliaAskAi(effectiveProps);

  const prepareSearchContainer = useCallback(() => {
    if (!searchContainer.current) {
      const divElement = document.createElement("div");
      searchContainer.current = divElement;
      document.body.insertBefore(divElement, document.body.firstChild);
    }
  }, []);

  const openModal = useCallback(() => {
    prepareSearchContainer();
    importDocSearchModalIfNeeded().then(() => setIsOpen(true));
  }, [prepareSearchContainer]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    searchButtonRef.current?.focus();
    setInitialQuery(undefined);
    onAskAiToggle(false);
  }, [onAskAiToggle]);

  const handleInput = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "f" && (event.metaKey || event.ctrlKey)) {
        // ignore browser's ctrl+f
        return;
      }
      // prevents duplicate key insertion in the modal input
      event.preventDefault();
      setInitialQuery(event.key);
      openModal();
    },
    [openModal]
  );

  const resultsFooterComponent = useResultsFooterComponent({ closeModal });

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen: openModal,
    onClose: closeModal,
    onInput: handleInput,
    searchButtonRef,
    isAskAiActive: isAskAiActive ?? false,
    onAskAiToggle: onAskAiToggle ?? (() => {}),
  } satisfies UseDocSearchKeyboardEventsProps & {
    // TODO Docusaurus v4: cleanup after we drop support for DocSearch v3
    isAskAiActive: boolean;
    onAskAiToggle: (askAiToggle: boolean) => void;
  } as UseDocSearchKeyboardEventsProps);

  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${effectiveProps.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={openModal}
        ref={searchButtonRef}
        translations={
          effectiveProps.translations?.button ?? translations.button
        }
      />

      {isOpen &&
        DocSearchModal &&
        searchContainer.current &&
        createPortal(
          <DocSearchModal
            onClose={closeModal}
            initialScrollY={window.scrollY}
            initialQuery={initialQuery}
            navigator={navigator}
            transformItems={transformItems}
            hitComponent={Hit}
            transformSearchClient={transformSearchClient}
            {...(effectiveProps.searchPagePath && {
              resultsFooterComponent,
            })}
            placeholder={currentPlaceholder}
            {...(effectiveProps as DocSearchProps)}
            translations={
              effectiveProps.translations?.modal ?? translations.modal
            }
            searchParameters={searchParameters}
            {...extraAskAiProps}
          />,
          searchContainer.current
        )}
    </>
  );
}

export default function SearchBar(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const algoliaConfig = siteConfig.themeConfig.algolia as DocSearchV4Props;
  const [aiEnabled, toggleAi] = useAiSearchPreference();

  return (
    <div className="search-with-ai-toggle">
      <DocSearch {...algoliaConfig} aiEnabled={aiEnabled} />
      {algoliaConfig.askAi && (
        <AiToggleButton enabled={aiEnabled} onToggle={toggleAi} />
      )}
    </div>
  );
}
