import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BOTSE Helper',
  tagline: 'Unofficial references for The Elder Scrolls:Betrayal of the Second Era',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://botse.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dmairs', // Usually your GitHub org/user name.
  projectName: 'botse', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tooltip.css'],	
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    ['@grnet/docusaurus-terminology', {
      termsDir: './docs/all',
      docsDir: './docs/',
      glossaryFilepath: './docs/glossary.md',
    },],
    require.resolve('docusaurus-lunr-search')
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'announcement',
      content:
        'All content on this website is currently WIP and may be incomplete or incorrect. If you notice any errors, please <a href="mailto:dmairs@proton.me">report them</a>.',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BOTSE Helper',
      logo: {
        alt: 'Logo for BOTSE Helper',
        src: 'img/logo.svg',
      },
    },
    sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    footer: {
      style: 'light',
      links: [
        {
          label: 'Feedback / Bugs / Suggestions',
          to: 'mailto:dmairs@proton.me',
        },
      ],
      copyright: `This site is a free community project not associated with Chip Theory Games in any way.`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
