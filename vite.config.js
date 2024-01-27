import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "drikke.org",
        short_name: "drikke",
        description: "A drinking game",
        theme_color: "#111827",
        orientation: "landscape",
      },
    }),
    vitePluginFaviconsInject("./public/logo.png"),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
