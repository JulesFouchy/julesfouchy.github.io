// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const fetch = require("node-fetch")

const fs = require("fs")
const path = require("path")
const last_doc = (folder_name) => {
  const content_folder = path.join("./content/", folder_name)
  const files = fs
    .readdirSync(content_folder)
    .filter((file_or_dir) =>
      fs.lstatSync(path.join(content_folder, file_or_dir)).isFile()
    )
  const file = files[files.length - 1]
  const file_without_extension = file.substring(0, file.indexOf("."))
  const file_without_number = file_without_extension.substring(
    file_without_extension.indexOf("-") + 1,
    file_without_extension.length
  )
  return path.join(folder_name, file_without_number)
}

/** @type {import('@docusaurus/types').Config} */
const config = async () => {
  const classes = await fetch(
    "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/my-classes.json"
  ).then((res) => res.json())
  return {
    title: "Jules Fouchy",
    tagline: "Hello 👋",
    url: "https://julesfouchy.github.io/",
    baseUrl: "/",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "JulesFouchy",
    projectName: "julesfouchy.github.io",
    deploymentBranch: "gh-pages",
    plugins: [
      "@docusaurus/plugin-ideal-image",
      require.resolve("docusaurus-lunr-search"),
    ],

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: "/",
            path: "./content",
            sidebarPath: require.resolve("./sidebars.js"),
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
            blogSidebarTitle: "All posts",
            blogSidebarCount: "ALL",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "",
          logo: {
            alt: "My Logo",
            src: "img/favicon-32x32.png",
          },
          items: [
            {
              to: last_doc("projects"),
              activeBaseRegex: "/projects",
              label: "Projects",
              position: "left",
            },
            {
              to: last_doc("artworks"),
              activeBaseRegex: "/artworks",
              label: "Artworks",
              position: "left",
            },
            { to: "/resume", label: "Resume", position: "left" },
            { to: "/blog", label: "Blog", position: "left" },
            {
              to: last_doc("miscellaneous"),
              activeBaseRegex: "/miscellaneous",
              label: "Miscellaneous",
              position: "left",
            },
            {
              href: "https://github.com/JulesFouchy",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub repository",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "My Classes",
              items: classes.map((a_class) => ({
                label: a_class.name,
                to: a_class.url,
              })),
            },
            {
              title: "Raise an issue !",
              items: [
                {
                  label: "Ask a question",
                  to: "https://github.com/JulesFouchy/julesfouchy.github.io/issues",
                },
                {
                  label: "Give me feedback",
                  to: "https://github.com/JulesFouchy/julesfouchy.github.io/issues",
                },
                {
                  label: "Report a mistake",
                  to: "https://github.com/JulesFouchy/julesfouchy.github.io/issues",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "YouTube",
                  to: "https://www.youtube.com/channel/UCpeT3Q6j8TAGRjW71vMZGYw",
                },
                {
                  label: "GitHub",
                  to: "https://github.com/JulesFouchy",
                },
                {
                  label: "Blog",
                  to: "/blog",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.
                  <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                  `,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["glsl"],
        },
      }),
  }
}

module.exports = config
