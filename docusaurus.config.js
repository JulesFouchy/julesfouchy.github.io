// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const fs = require('fs')
const path = require('path')
const last_doc = (docs_folder) => {
    const files = fs.readdirSync(docs_folder).filter(file_or_dir => fs.lstatSync(path.join(docs_folder, file_or_dir)).isFile() )
    const file = files[files.length - 1]
    const file_without_extension = file.substring(0, file.indexOf('.'))
    const file_without_number = file_without_extension.substring(file_without_extension.indexOf('-') + 1, file_without_extension.length)
    return docs_folder.substring(1, docs_folder.length) + file_without_number
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jules Fouchy',
  tagline: 'Hello 👋',
  url: 'https://julesfouchy.github.io/',
  baseUrl: '/home2/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'JulesFouchy',
  projectName: 'home2',
  plugins: ['@docusaurus/plugin-ideal-image'],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarItemsGenerator: async function ({
            defaultSidebarItemsGenerator,
            ...args
        }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args)
            sidebarItems.reverse()
            return sidebarItems
        },
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
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
          title: '',
          logo: {
            alt: 'My Logo',
            src: 'img/favicon-32x32.png',
          },
          items: [
            {to: last_doc("./docs/portfolio/"), activeBaseRegex: "/portfolio/", label: 'Portfolio', position: 'left'},
            {to: last_doc("./docs/artworks/"), activeBaseRegex: "/artworks/", label: 'Artworks', position: 'left'},
            {to: '/resume', label: 'Resume', position: 'left'},
            {to: '/blog', label: 'Blog', position: 'left'},
            {to: '/about', label: 'About', position: 'left'},
            {
              type: 'localeDropdown',
              position: 'right',
            },
            {
              href: 'https://github.com/JulesFouchy',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Our projects',
              items: [
                {
                  label: 'CoolLab',
                  to: 'https://github.com/CoolLibs/CoolLab',
                },
                {
                  label: 'CoolDemo',
                  to: 'https://github.com/CoolLibs/Demo',
                },
              ],
            },
            {
              title: 'Raise an issue !',
              items: [
                {
                  label: 'Ask a question',
                  to: 'https://github.com/CoolLibs/Cool/issues',
                },
                {
                  label: 'Give us feedback',
                  to: 'https://github.com/CoolLibs/Cool/issues',
                },
                {
                  label: 'Report a mistake',
                  to: 'https://github.com/CoolLibs/home/issues',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  to: 'https://github.com/JulesFouchy',
                },
              ],
            },
          ],
          copyright: `Copyright © ${
              new Date()
                  .getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.
                  <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                  `,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
