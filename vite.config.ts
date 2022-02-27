import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/element.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // hooks自动引入
    AutoImport({
      imports: ["vue", "vue-router"],
      // resolvers: [ElementPlusResolver()],
      dts: "src/auto-imports.d.ts",
    }),
    // 组件自动引入
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
      ],
      extensions: ['vue'],
      dts: "src/components.d.ts",
    }),
    
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
