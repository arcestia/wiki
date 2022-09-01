// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Skiddle Data Collection",
  tagline: "Everything I Collect, Capture, Curated and Store Digitally",
  url: "https://wiki.skiddle.id",
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
        title: "Skiddle Data Collection",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://www.instagram.com/arcestia/",
            position: "right",
            label: "📷",
          },
          {
            href: "https://twitter.com/LizSnowy",
            position: "right",
            label: "🐦",
          },
          {
            href: "https://github.com/arcestia",
            position: "right",
            label: "🐙",
          },
          {
            href: "https://skiddle.id",
            position: "right",
            label: "🏡",
          },
          {
            href: "https://github.com/arcestia/wiki",
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
        appId: "4DXKFPAV3C",
        // Public API key
        apiKey: "77d61c7cdd3e03485dec669c31a1846b",
        indexName: "skiddle",
      },
    }),
};

module.exports = config;
