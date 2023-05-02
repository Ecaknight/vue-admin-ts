import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX(), visualizer({ filename: 'visualizerFile.html' })],
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
})
