import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  server: {
    port: 3000,
  },

  build: {
    target: 'esnext',
  },

  plugins: [
    solidPlugin(),
    Unocss(),
  ],
})
