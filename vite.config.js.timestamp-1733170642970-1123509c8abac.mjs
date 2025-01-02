// vite.config.js
import { defineConfig } from "file:///C:/Users/gatse/Desktop/cookie-projects/qr-code-site/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/gatse/Desktop/cookie-projects/qr-code-site/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [vue()],
  assetsInclude: ["**/*.html"],
  chockidarWatchOptions: {
    usePolling: true
  },
  base: "",
  build: {
    target: "es2015"
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
        // or "modern"
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    },
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnYXRzZVxcXFxEZXNrdG9wXFxcXGNvb2tpZS1wcm9qZWN0c1xcXFxxci1jb2RlLXNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGdhdHNlXFxcXERlc2t0b3BcXFxcY29va2llLXByb2plY3RzXFxcXHFyLWNvZGUtc2l0ZVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZ2F0c2UvRGVza3RvcC9jb29raWUtcHJvamVjdHMvcXItY29kZS1zaXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKV0sXHJcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmh0bWwnXSxcclxuICBjaG9ja2lkYXJXYXRjaE9wdGlvbnM6IHtcclxuICAgIHVzZVBvbGxpbmc6IHRydWVcclxuICB9LFxyXG4gIGJhc2U6ICcnLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6ICdlczIwMTUnXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFwaTogJ21vZGVybicgLy8gb3IgXCJtb2Rlcm5cIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZVBvbGxpbmc6IHRydWVcclxuICAgIH0sXHJcbiAgICBwb3J0OiAzMDAwXHJcbiAgfVxyXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVYsU0FBUyxvQkFBb0I7QUFDcFgsT0FBTyxTQUFTO0FBR2hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLGVBQWUsQ0FBQyxXQUFXO0FBQUEsRUFDM0IsdUJBQXVCO0FBQUEsSUFDckIsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUE7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
