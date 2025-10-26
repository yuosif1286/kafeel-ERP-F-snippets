export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
