import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KiteMc",
  description: "Documentation for all KiteMC team projects",
  head: [["link", { rel: "icon", href: "https://kite.cn-nb1.rains3.com/logo.svg" }]],

  outDir: 'dist',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    server: {
      allowedHosts: ["kitemc.com"],
    },
  },

  srcDir: "./pages",
  appearance: "force-dark",
  cleanUrls: true,

  locales: {
    root: {
      label: "English",
      lang: "en",
      // English navigation
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          // { text: "Download", link: "/download" },
          { text: "SurviveX", link: "/docs/survivex/", activeMatch: "/docs/survivex/" },
        ],
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      // Chinese navigation
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          // { text: "下载", link: "/zh/download" },
          { text: "SurviveX", link: "/zh/docs/survivex/", activeMatch: "/zh/docs/survivex/" },
        ],
      },
    },
  },

  themeConfig: {
    logo: "https://kite.cn-nb1.rains3.com/logo.svg",

    // Default navigation (will be overridden by locale-specific navigation)
    nav: [
      { text: "Home", link: "/docs/" },
      { text: "SurviveX", link: "/docs/survivex", activeMatch: "/docs/survivex" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/KiteMc/" },
      { 
        icon: { 
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1746337487425" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="1461" width="200" height="200"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1462"/></svg>'
        }, 
        link: 'https://qm.qq.com/q/R83fq82HWm' 
      },
    ],
  },
});
