import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BOTSE Helper',
  tagline: 'Unofficial references for The Elder Scrolls:Betrayal of the Second Era',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BOTSE Helper',
      logo: {
        alt: 'Logo for BOTSE Helper',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Official Chip Theory Games',
          items: [
            {
              label: 'Support',
              to: 'https://chiptheorygames.com/support/',
            },
            {
              label: 'Discord',
              to: 'https://discord.com/invite/QcKpp9B',
            },
          ],
        },
      ],
      copyright: `This site is a free community project not associated with Chip Theory Games in any way.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
