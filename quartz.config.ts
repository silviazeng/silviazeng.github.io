import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ever Branching",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "silviazeng",
    },
    locale: "en-US",
    baseUrl: "silviazeng.github.io",
    ignorePatterns: ["private", "templates", ".obsidian", "posts/_to_delete"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: false,
      typography: {
        title: { name: "Playfair Display", weights: [400, 500], includeItalic: true },
        header: { name: "Playfair Display", weights: [400, 500], includeItalic: true },
        body: { name: "Source Serif 4", weights: [400, 500], includeItalic: true },
        code: { name: "JetBrains Mono", weights: [400, 500] },
      },
      colors: {
        lightMode: {
          // Daylight — warm paper companion to the Terminal Garden dark theme
          // (token sheet from the "Ever Branching Light Mode" design canvas).
          light: "#f7f3e7",
          lightgray: "#ded6c0",
          gray: "#b5ac93",
          darkgray: "#565b52",
          dark: "#1a1d19",
          secondary: "#2e6b30",
          tertiary: "#4c8a4c",
          highlight: "rgba(46, 107, 48, 0.08)",
          textHighlight: "rgba(125, 92, 21, 0.22)",
        },
        darkMode: {
          light: "#0f1210",
          lightgray: "#1a1e1a",
          gray: "#2a2e2a",
          darkgray: "#a0a498",
          dark: "#ece8db",
          secondary: "#7ab87a",
          tertiary: "#c9a45a",
          highlight: "rgba(122, 184, 122, 0.08)",
          textHighlight: "rgba(122, 184, 122, 0.28)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true, parseTags: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
