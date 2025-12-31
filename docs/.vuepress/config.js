import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  router:{
    history: 'hash',
  },
  title: 'Kaffeel Snippets for ERP-F',
  description: 'Awesome docs!',
  base: '/kafeel-ERP-F-snippets/',
  theme: hopeTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'ChangeLog', link: '/CHANGELOG.md' },
      {
    text: 'Social',
    children: [
      { text: 'GitHub', link: 'https://github.com/yuosif1286' },
      { text: 'LinkedIn', link: 'https://www.linkedin.com/in/yuosif-raed-04a84621a' },
    ],
  },
    ],
    author: {
      name: 'Mr.Yuosif',
      url: 'https://github.com/yuosif1286',
    },
    fullscreen: true,
    darkmode:'toggle',
     defaultDark:true,
  footer: {
    display: true, // عرض الفوتر
    content: `
      <a href="https://github.com/yuosif1286" target="_blank">GitHub</a> |
      <a href="https://www.linkedin.com/in/yuosif-raed-04a84621a" target="_blank">LinkedIn</a>
    `,
  },
    plugins: {
      backToTop: true,
      mdEnhance: {
        tabs: true,
        codetabs: true,
      },
      search: true
    },
  }),
  plugins: [
    markdownChartPlugin({ mermaid: true }),
    mdEnhancePlugin({
      tabs: true,
      codetabs: true,
    }),
       searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
      maxSuggestions: 10,
    }),
  ],
})
