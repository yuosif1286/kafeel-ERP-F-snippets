import comp from "/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"VS Code Extension for Front-End Developers\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.27,\"words\":80},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
