"use strict";
/**
 * Custom SearchBar component that wraps the Algolia DocSearch with a
 * persistent AI search toggle. The user's preference is stored in
 * localStorage so it survives page reloads.
 *
 * Based on @docusaurus/theme-search-algolia SearchBar source.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchBar;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var button_1 = require("@docsearch/react/button");
var useDocSearchKeyboardEvents_1 = require("@docsearch/react/useDocSearchKeyboardEvents");
var Head_1 = require("@docusaurus/Head");
var Link_1 = require("@docusaurus/Link");
var router_1 = require("@docusaurus/router");
var theme_common_1 = require("@docusaurus/theme-common");
var client_1 = require("@docusaurus/theme-search-algolia/client");
var Translate_1 = require("@docusaurus/Translate");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var SearchTranslations_1 = require("@theme/SearchTranslations");
var AI_SEARCH_STORAGE_KEY = "botse-search-ai-enabled";
var DocSearchModal = null;
function importDocSearchModalIfNeeded() {
    if (DocSearchModal) {
        return Promise.resolve();
    }
    return Promise.all([
        Promise.resolve().then(function () { return require("@docsearch/react/modal"); }),
        Promise.resolve().then(function () { return require("@docsearch/react/style"); }),
        Promise.resolve().then(function () { return require("./styles.css"); }),
    ]).then(function (_a) {
        var Modal = _a[0].DocSearchModal;
        DocSearchModal = Modal;
    });
}
function useNavigator(_a) {
    var externalUrlRegex = _a.externalUrlRegex;
    var history = (0, router_1.useHistory)();
    var navigator = (0, react_1.useState)(function () {
        return {
            navigate: function (params) {
                // Algolia results could contain URL's from other domains which cannot
                // be served through history and should navigate with window.location
                if ((0, theme_common_1.isRegexpStringMatch)(externalUrlRegex, params.itemUrl)) {
                    window.location.href = params.itemUrl;
                }
                else {
                    history.push(params.itemUrl);
                }
            },
        };
    })[0];
    return navigator;
}
function useTransformSearchClient() {
    var docusaurusVersion = (0, useDocusaurusContext_1.default)().siteMetadata.docusaurusVersion;
    return (0, react_1.useCallback)(function (searchClient) {
        searchClient.addAlgoliaAgent("docusaurus", docusaurusVersion);
        return searchClient;
    }, [docusaurusVersion]);
}
function useTransformItems(props) {
    var processSearchResultUrl = (0, client_1.useSearchResultUrlProcessor)();
    var transformItems = (0, react_1.useState)(function () {
        return function (items) {
            return props.transformItems
                ? // Custom transformItems
                    props.transformItems(items)
                : // Default transformItems
                    items.map(function (item) { return (__assign(__assign({}, item), { url: processSearchResultUrl(item.url) })); });
        };
    })[0];
    return transformItems;
}
function useResultsFooterComponent(_a) {
    var closeModal = _a.closeModal;
    return (0, react_1.useMemo)(function () {
        return function (_a) {
            var state = _a.state;
            return <ResultsFooter state={state} onClose={closeModal}/>;
        };
    }, [closeModal]);
}
function Hit(_a) {
    var hit = _a.hit, children = _a.children;
    return <Link_1.default to={hit.url}>{children}</Link_1.default>;
}
function ResultsFooter(_a) {
    var state = _a.state, onClose = _a.onClose;
    var createSearchLink = (0, theme_common_1.useSearchLinkCreator)();
    return (<Link_1.default to={createSearchLink(state.query)} onClick={onClose}>
      <Translate_1.default id="theme.SearchBar.seeAll" values={{ count: state.context.nbHits }}>
        {"See all {count} results"}
      </Translate_1.default>
    </Link_1.default>);
}
function useSearchParameters(_a) {
    var _b, _c;
    var contextualSearch = _a.contextualSearch, props = __rest(_a, ["contextualSearch"]);
    var contextualSearchFacetFilters = (0, client_1.useAlgoliaContextualFacetFilters)();
    var configFacetFilters = (_c = (_b = props.searchParameters) === null || _b === void 0 ? void 0 : _b.facetFilters) !== null && _c !== void 0 ? _c : [];
    var facetFilters = contextualSearch
        ? // Merge contextual search filters with config filters
            (0, client_1.mergeFacetFilters)(contextualSearchFacetFilters, configFacetFilters)
        : // ... or use config facetFilters
            configFacetFilters;
    // We let users override default searchParameters if they want to
    return __assign(__assign({}, props.searchParameters), { facetFilters: facetFilters });
}
function useAiSearchPreference() {
    var _a = (0, react_1.useState)(true), aiEnabled = _a[0], setAiEnabled = _a[1];
    (0, react_1.useEffect)(function () {
        var stored = localStorage.getItem(AI_SEARCH_STORAGE_KEY);
        if (stored !== null) {
            setAiEnabled(stored === "true");
        }
    }, []);
    var toggle = (0, react_1.useCallback)(function () {
        setAiEnabled(function (prev) {
            var next = !prev;
            localStorage.setItem(AI_SEARCH_STORAGE_KEY, String(next));
            return next;
        });
    }, []);
    return [aiEnabled, toggle];
}
function AiToggleButton(_a) {
    var enabled = _a.enabled, onToggle = _a.onToggle;
    return (<button type="button" className={"search-ai-toggle".concat(enabled ? " search-ai-toggle--enabled" : " search-ai-toggle--disabled")} onClick={onToggle} title={enabled
            ? "AI search is enabled — click to disable"
            : "AI search is disabled — click to enable"} aria-label={enabled ? "Disable AI search" : "Enable AI search"} aria-pressed={enabled}>
      AI
    </button>);
}
function DocSearch(_a) {
    var _b, _c, _d, _e;
    var externalUrlRegex = _a.externalUrlRegex, aiEnabled = _a.aiEnabled, props = __rest(_a, ["externalUrlRegex", "aiEnabled"]);
    // When the user has disabled AI search, strip the askAi prop so the
    // DocSearch modal does not render the "Ask AI" button at all.
    var effectiveProps = aiEnabled
        ? props
        : __assign(__assign({}, props), { askAi: undefined });
    var navigator = useNavigator({ externalUrlRegex: externalUrlRegex });
    var searchParameters = useSearchParameters(__assign({}, effectiveProps));
    var transformItems = useTransformItems(effectiveProps);
    var transformSearchClient = useTransformSearchClient();
    var searchContainer = (0, react_1.useRef)(null);
    var searchButtonRef = (0, react_1.useRef)(null);
    var _f = (0, react_1.useState)(false), isOpen = _f[0], setIsOpen = _f[1];
    var _g = (0, react_1.useState)(undefined), initialQuery = _g[0], setInitialQuery = _g[1];
    var _h = (0, client_1.useAlgoliaAskAi)(effectiveProps), isAskAiActive = _h.isAskAiActive, currentPlaceholder = _h.currentPlaceholder, onAskAiToggle = _h.onAskAiToggle, extraAskAiProps = _h.extraAskAiProps;
    var prepareSearchContainer = (0, react_1.useCallback)(function () {
        if (!searchContainer.current) {
            var divElement = document.createElement("div");
            searchContainer.current = divElement;
            document.body.insertBefore(divElement, document.body.firstChild);
        }
    }, []);
    var openModal = (0, react_1.useCallback)(function () {
        prepareSearchContainer();
        importDocSearchModalIfNeeded().then(function () { return setIsOpen(true); });
    }, [prepareSearchContainer]);
    var closeModal = (0, react_1.useCallback)(function () {
        var _a;
        setIsOpen(false);
        (_a = searchButtonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setInitialQuery(undefined);
        onAskAiToggle(false);
    }, [onAskAiToggle]);
    var handleInput = (0, react_1.useCallback)(function (event) {
        if (event.key === "f" && (event.metaKey || event.ctrlKey)) {
            // ignore browser's ctrl+f
            return;
        }
        // prevents duplicate key insertion in the modal input
        event.preventDefault();
        setInitialQuery(event.key);
        openModal();
    }, [openModal]);
    var resultsFooterComponent = useResultsFooterComponent({ closeModal: closeModal });
    (0, useDocSearchKeyboardEvents_1.useDocSearchKeyboardEvents)({
        isOpen: isOpen,
        onOpen: openModal,
        onClose: closeModal,
        onInput: handleInput,
        searchButtonRef: searchButtonRef,
        isAskAiActive: isAskAiActive !== null && isAskAiActive !== void 0 ? isAskAiActive : false,
        onAskAiToggle: onAskAiToggle !== null && onAskAiToggle !== void 0 ? onAskAiToggle : (function () { }),
    });
    return (<>
      <Head_1.default>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link rel="preconnect" href={"https://".concat(effectiveProps.appId, "-dsn.algolia.net")} crossOrigin="anonymous"/>
      </Head_1.default>

      <button_1.DocSearchButton onTouchStart={importDocSearchModalIfNeeded} onFocus={importDocSearchModalIfNeeded} onMouseOver={importDocSearchModalIfNeeded} onClick={openModal} ref={searchButtonRef} translations={(_c = (_b = effectiveProps.translations) === null || _b === void 0 ? void 0 : _b.button) !== null && _c !== void 0 ? _c : SearchTranslations_1.default.button}/>

      {isOpen &&
            DocSearchModal &&
            searchContainer.current &&
            (0, react_dom_1.createPortal)(<DocSearchModal onClose={closeModal} initialScrollY={window.scrollY} initialQuery={initialQuery} navigator={navigator} transformItems={transformItems} hitComponent={Hit} transformSearchClient={transformSearchClient} {...(effectiveProps.searchPagePath && {
                resultsFooterComponent: resultsFooterComponent,
            })} placeholder={currentPlaceholder} {...effectiveProps} translations={(_e = (_d = effectiveProps.translations) === null || _d === void 0 ? void 0 : _d.modal) !== null && _e !== void 0 ? _e : SearchTranslations_1.default.modal} searchParameters={searchParameters} {...extraAskAiProps}/>, searchContainer.current)}
    </>);
}
function SearchBar() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var algoliaConfig = siteConfig.themeConfig.algolia;
    var _a = useAiSearchPreference(), aiEnabled = _a[0], toggleAi = _a[1];
    return (<div className="search-with-ai-toggle">
      <DocSearch {...algoliaConfig} aiEnabled={aiEnabled}/>
      {algoliaConfig.askAi && (<AiToggleButton enabled={aiEnabled} onToggle={toggleAi}/>)}
    </div>);
}
