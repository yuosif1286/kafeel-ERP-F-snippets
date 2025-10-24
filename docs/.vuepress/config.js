import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'

export default {
  lang: 'en-US',
  title: 'Marketplace Snippets',
  description: 'Documentation for Marketplace Snippets project',

  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guid/' },
    ],
  }),

  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          vue: path.resolve('./node_modules/vue/dist/vue.runtime.esm-bundler.js'),
        },
      },
    },
  }),
}
