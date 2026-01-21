// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://rezn1r.github.io',
  base: '/Kyuu/',
  devToolbar: {
    enabled: false
  }
});
