import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "BOTSE Helper",
  tagline:
    "Unofficial references for The Elder Scrolls:Betrayal of the Second Era",
  favicon: "img/favicon.ico",

  url: "https://botse-helper.com",
  baseUrl: "/",
  trailingSlash: true,
  organizationName: "dmairs",
  projectName: "botse",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/tooltip.css"],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@grnet/docusaurus-terminology",
      {
        termsDir: "./docs",
        docsDir: "./docs",
        glossaryFilepath: ".glossary.md",
      },
    ],
  ],
  themeConfig: {
    algolia: {
      appId: "MGWXDK9XAV",
      apiKey: "f5bc8a4afdd20ef7754fa018b947a2f7",
      indexName: "botse",

      contextualSearch: true,
      externalUrlRegex: "external\\.com|domain\\.com",
      searchParameters: {},
      searchPagePath: "search",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "BOTSE Helper",
      logo: {
        alt: "Logo for BOTSE Helper",
        src: "img/logo.svg",
        href: "https://botse-helper.com/docs",
      },
      items: [
        {
          to: "https://app.botse-helper.com",
          position: "left",
          label: "BOTSE Tracker",
        },
        {
          to: "enemy-skills-tracker",
          position: "left",
          label: "Enemy Skills Tracker",
        },
      ],
    },
    sidebar: {
      hideable: true,
      autoCollapseCategories: false,
    },
    footer: {
      style: "light",
      links: [
        {
          label: "Feedback / Suggestions",
          to: "mailto:dmairs@proton.me",
        },
        {
          label: "GitHub",
          to: "https://github.com/dmairs/botse",
        },
      ],
      copyright: `This site is a community project not associated with Chip Theory Games.`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
