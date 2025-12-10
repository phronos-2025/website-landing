// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'P.H.R.O.N.O.S. Observatory',
  tagline: 'Public Heuristics for Resilient Ontology, Navigation, and Observational Science',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://phronos.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/observatory/',

  // GitHub pages deployment config.
  organizationName: 'phronos-observatory',
  projectName: 'phronos-website',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Plugins for LaTeX support
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Versioning
          lastVersion: 'current',
          versions: {
            current: {
              label: 'v1.0 (Beta)',
              path: '',
            },
          },
          editUrl: 'https://github.com/phronos-observatory/phronos-website/tree/main/observatory/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/phronos-social-card.jpg',
      navbar: {
        title: 'P.H.R.O.N.O.S.',
        logo: {
          alt: 'P.H.R.O.N.O.S. Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'observatorySidebar',
            position: 'left',
            label: 'Observatory',
          },
          {
            to: '/',
            label: 'About',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/phronos-observatory/phronos-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Landscape',
                to: '/docs/landscape/intro',
              },
              {
                label: 'Theory',
                to: '/docs/theory/intro',
              },
              {
                label: 'Methods',
                to: '/docs/methods/intro',
              },
              {
                label: 'Results',
                to: '/docs/results/intro',
              },
            ],
          },
          {
            title: 'System',
            items: [
              {
                label: 'Constitution',
                to: '/docs/theory/constitution',
              },
              {
                label: 'Changelog',
                to: '/docs/changelog',
              },
              {
                label: 'Open Peer Review',
                to: '/docs/contribute',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Instruments (Coming Soon)',
                href: '#',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/phronos-observatory/phronos-website',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} P.H.R.O.N.O.S. Observatory. Built with Docusaurus. Licensed under CC BY 4.0.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
