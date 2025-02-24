import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
export default defineConfig({
  plugins: [vue()],
  chockidarWatchOptions: {
    usePolling: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "",
  build: {
    target: "es2015",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern", // or "modern"
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 3000,
  },
});
