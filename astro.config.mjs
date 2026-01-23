// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://terranova-wiki.pages.dev',
  base: '',

  devToolbar: {
    enabled: false
  },
  output: "server",
  adapter: cloudflare({ mode: "pages" }),

  integrations: [mdx()],
  imageService: "compile",
});