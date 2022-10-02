import { defineConfig } from 'vite'
import ResolveAlias from 'vite-plugin-easy-resolve-alias'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    // https://github.com/mys1024/vite-plugin-easy-resolve-alias
    ResolveAlias({ '~/': 'src/' }),
    // https://github.com/solidjs/vite-plugin-solid
    solidPlugin(),
    // https://github.com/unocss/unocss
    Unocss(),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
    transformMode: {
      web: [/.[jt]sx?/],
    },
    deps: {
      registerNodeLoader: true,
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
