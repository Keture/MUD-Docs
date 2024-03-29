// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mark Up Down',
  tagline: 'An Open-Source Mark Down/Up Library',
  url: 'https://keture.github.io',
  baseUrl: '/MUD-Docs/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'Keture', // Usually your GitHub org/user name.
  projectName: 'MUD-Docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Keture/MUD-Docs/blob/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Keture/MUD-Docs/blob/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MUD',
        logo: {
          alt: 'MUD Logo',
          src: 'img/mud.svg',
          srcDark: 'img/mudDark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'basics-of-markdown/intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Keture/MUD-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'support_us',
        content:
          '<b>If you like MUD, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Keture/MUD-Docs">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Keture/MUD-Docs">Twitter</a></b>',
        backgroundColor: '#E04E29',
        textColor: '#fff',
        isCloseable: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/c/keture',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/keturecom',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/keture',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Keture. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
