// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Everything I know",
  tagline: "Everything I know",
  url: "https://wiki.nikiv.dev",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "arcestia", // Usually your GitHub org/user name.
  projectName: "wiki", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/arcestia/wiki/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-00000000",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true,
      },
      navbar: {
        title: "Everything I Know",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://www.instagram.com/nikitavoloboev/",
            position: "right",
            label: "📷",
          },
          {
            href: "https://twitter.com/nikitavoloboev",
            position: "right",
            label: "🐦",
          },
          {
            href: "https://github.com/nikitavoloboev",
            position: "right",
            label: "🐙",
          },
          {
            href: "https://nikiv.dev",
            position: "right",
            label: "🏡",
          },
          {
            href: "https://github.com/nikitavoloboev/knowledge",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // Application ID provided by Algolia
        appId: "CZ3WDUKZ5I",
        // Public API key
        apiKey: "5d5711f391d3d3f4b84e8502f9c0d3fd",
        indexName: "skiddleid",
      },
    }),
};

module.exports = config;
