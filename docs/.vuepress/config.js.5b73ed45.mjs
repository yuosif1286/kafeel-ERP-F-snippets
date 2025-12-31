// docs/.vuepress/config.js
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { markdownChartPlugin } from "@vuepress/plugin-markdown-chart";
import pluginSearch from "@vuepress/plugin-search";
var config_default = defineUserConfig({
  bundler: viteBundler(),
  title: "Kaffeel Snippets for ERP-F",
  description: "Awesome docs!",
  theme: hopeTheme({
    navbar: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "ChangeLog", link: "/CHANGELOG.md" },
      {
        text: "Social",
        children: [
          { text: "GitHub", link: "https://github.com/yuosif1286" },
          { text: "LinkedIn", link: "https://www.linkedin.com/in/yuosif-raed-04a84621a" }
        ]
      }
    ],
    author: {
      name: "Mr.Yuosif",
      url: "https://github.com/yuosif1286"
    },
    footer: {
      display: true,
      // عرض الفوتر
      content: `
      <a href="https://github.com/yuosif1286" target="_blank">GitHub</a> |
      <a href="https://www.linkedin.com/in/yuosif-raed-04a84621a" target="_blank">LinkedIn</a>
    `
    },
    plugins: {
      backToTop: true,
      mdEnhance: {
        tabs: true,
        codetabs: true
      }
    }
  }),
  plugins: [
    markdownChartPlugin({ mermaid: true }),
    mdEnhancePlugin({
      tabs: true,
      codetabs: true
    }),
    pluginSearch({})
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUveW95by9Eb2N1bWVudHMvR2l0SHViL2thZmVlbC1FUlAtRi1zbmlwcGV0cy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUveW95by9Eb2N1bWVudHMvR2l0SHViL2thZmVlbC1FUlAtRi1zbmlwcGV0cy9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUveW95by9Eb2N1bWVudHMvR2l0SHViL2thZmVlbC1FUlAtRi1zbmlwcGV0cy9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnXG5pbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1ob3BlJ1xuaW1wb3J0IHsgbWRFbmhhbmNlUGx1Z2luIH0gZnJvbSAndnVlcHJlc3MtcGx1Z2luLW1kLWVuaGFuY2UnXG5pbXBvcnQgeyBtYXJrZG93bkNoYXJ0UGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1tYXJrZG93bi1jaGFydCdcbmltcG9ydCBwbHVnaW5TZWFyY2ggZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1zZWFyY2gnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxuICB0aXRsZTogJ0thZmZlZWwgU25pcHBldHMgZm9yIEVSUC1GJyxcbiAgZGVzY3JpcHRpb246ICdBd2Vzb21lIGRvY3MhJyxcbiAgdGhlbWU6IGhvcGVUaGVtZSh7XG4gICAgbmF2YmFyOiBbXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdHdWlkZScsIGxpbms6ICcvZ3VpZGUvJyB9LFxuICAgICAgeyB0ZXh0OiAnQ2hhbmdlTG9nJywgbGluazogJy9DSEFOR0VMT0cubWQnIH0sXG4gICAgICB7XG4gICAgdGV4dDogJ1NvY2lhbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgdGV4dDogJ0dpdEh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20veXVvc2lmMTI4NicgfSxcbiAgICAgIHsgdGV4dDogJ0xpbmtlZEluJywgbGluazogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi95dW9zaWYtcmFlZC0wNGE4NDYyMWEnIH0sXG4gICAgXSxcbiAgfSxcbiAgICBdLFxuICAgIGF1dGhvcjoge1xuICAgICAgbmFtZTogJ01yLll1b3NpZicsXG4gICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20veXVvc2lmMTI4NicsXG4gICAgfSxcbiAgZm9vdGVyOiB7XG4gICAgZGlzcGxheTogdHJ1ZSwgLy8gXHUwNjM5XHUwNjMxXHUwNjM2IFx1MDYyN1x1MDY0NFx1MDY0MVx1MDY0OFx1MDYyQVx1MDYzMVxuICAgIGNvbnRlbnQ6IGBcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20veXVvc2lmMTI4NlwiIHRhcmdldD1cIl9ibGFua1wiPkdpdEh1YjwvYT4gfFxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi95dW9zaWYtcmFlZC0wNGE4NDYyMWFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rZWRJbjwvYT5cbiAgICBgLFxuICB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGJhY2tUb1RvcDogdHJ1ZSxcbiAgICAgIG1kRW5oYW5jZToge1xuICAgICAgICB0YWJzOiB0cnVlLFxuICAgICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSksXG4gIHBsdWdpbnM6IFtcbiAgICBtYXJrZG93bkNoYXJ0UGx1Z2luKHsgbWVybWFpZDogdHJ1ZSB9KSxcbiAgICBtZEVuaGFuY2VQbHVnaW4oe1xuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgIH0pLFxuICAgIHBsdWdpblNlYXJjaCh7fSlcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdXLFNBQVMsbUJBQW1CO0FBQ3BZLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sa0JBQWtCO0FBRXpCLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsU0FBUyxZQUFZO0FBQUEsRUFDckIsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsT0FBTyxVQUFVO0FBQUEsSUFDZixRQUFRO0FBQUEsTUFDTixFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxNQUMxQixFQUFFLE1BQU0sU0FBUyxNQUFNLFVBQVU7QUFBQSxNQUNqQyxFQUFFLE1BQU0sYUFBYSxNQUFNLGdCQUFnQjtBQUFBLE1BQzNDO0FBQUEsUUFDRixNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsVUFDUixFQUFFLE1BQU0sVUFBVSxNQUFNLGdDQUFnQztBQUFBLFVBQ3hELEVBQUUsTUFBTSxZQUFZLE1BQU0sb0RBQW9EO0FBQUEsUUFDaEY7QUFBQSxNQUNGO0FBQUEsSUFDRTtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNGLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBLE1BQ1QsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBLElBSVg7QUFBQSxJQUNFLFNBQVM7QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUFBLEVBQ0QsU0FBUztBQUFBLElBQ1Asb0JBQW9CLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFBQSxJQUNyQyxnQkFBZ0I7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxJQUNELGFBQWEsQ0FBQyxDQUFDO0FBQUEsRUFDakI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
