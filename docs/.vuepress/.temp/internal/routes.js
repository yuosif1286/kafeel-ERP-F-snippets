export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/CHANGELOG.html", { loader: () => import(/* webpackChunkName: "CHANGELOG.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/CHANGELOG.html.js"), meta: {"title":"1.7.0 (2025-10-24)"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
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
