export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/CHANGELOG.html", { loader: () => import(/* webpackChunkName: "CHANGELOG.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/CHANGELOG.html.js"), meta: {"title":"1.11.0 (2025-12-31)"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"VS Code Extension for Front-End Developers"} }],
  ["/html.html", { loader: () => import(/* webpackChunkName: "html.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/html.html.js"), meta: {"title":"HTML Snippets"} }],
  ["/typescript.html", { loader: () => import(/* webpackChunkName: "typescript.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/typescript.html.js"), meta: {"title":"TYPESCRIPT Snippets"} }],
  ["/vue.html", { loader: () => import(/* webpackChunkName: "vue.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/vue.html.js"), meta: {"title":"VUE Snippets"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
