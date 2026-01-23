// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://qdesperation.github.io/',
  base: '/TerraNova-Addon-Wiki',

  devToolbar: {
    enabled: false
  },

  integrations: [mdx()]
});