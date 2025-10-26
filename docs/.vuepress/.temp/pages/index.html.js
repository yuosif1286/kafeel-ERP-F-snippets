import comp from "/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Hello VuePress\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1761485233000,\"contributors\":[{\"name\":\"yuosif1286\",\"username\":\"yuosif1286\",\"email\":\"84059356+yuosif1286@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/yuosif1286\"}],\"changelog\":[{\"hash\":\"508d922fa8e68b40faf719d0b78b3a41f33da533\",\"time\":1761485233000,\"email\":\"84059356+yuosif1286@users.noreply.github.com\",\"author\":\"yuosif1286\",\"message\":\"fix(docs): fix docs with vuepress\"},{\"hash\":\"bbf296e08b49ff902ea559e130b9d3e99ba2e86e\",\"time\":1761331849000,\"email\":\"84059356+yuosif1286@users.noreply.github.com\",\"author\":\"yuosif1286\",\"message\":\"feat(docs): create new docs and guid\"}]},\"filePathRelative\":\"README.md\"}")
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
