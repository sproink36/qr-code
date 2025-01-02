import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  chockidarWatchOptions: {
    usePolling: true,
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
