export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/data/data/com.termux/files/home/dvnge-website/README.md"), meta: {"title":"首页"} }],
  ["/docs/Dvnge%E7%9A%84%E6%96%87%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "docs_Dvnge的文件.html" */"/data/data/com.termux/files/home/dvnge-website/docs/Dvnge的文件.md"), meta: {"title":"Dvnge的文件"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"/data/data/com.termux/files/home/dvnge-website/docs/index.md"), meta: {"title":"Dvnge 文档"} }],
  ["/docs/%E4%BB%80%E4%B9%88%E6%98%AF%E8%8A%82%E7%82%B9.html", { loader: () => import(/* webpackChunkName: "docs_什么是节点.html" */"/data/data/com.termux/files/home/dvnge-website/docs/什么是节点.md"), meta: {"title":"什么是节点？"} }],
  ["/docs/%E5%9F%BA%E7%A1%80%E5%B1%9E%E6%80%A7.html", { loader: () => import(/* webpackChunkName: "docs_基础属性.html" */"/data/data/com.termux/files/home/dvnge-website/docs/基础属性.md"), meta: {"title":"基础属性"} }],
  ["/docs/%E7%AB%8B%E7%BB%98.html", { loader: () => import(/* webpackChunkName: "docs_立绘.html" */"/data/data/com.termux/files/home/dvnge-website/docs/立绘.md"), meta: {"title":"立绘"} }],
  ["/docs/%E7%AB%A0%E8%8A%82%E6%A6%82%E5%BF%B5.html", { loader: () => import(/* webpackChunkName: "docs_章节概念.html" */"/data/data/com.termux/files/home/dvnge-website/docs/章节概念.md"), meta: {"title":"章节概念"} }],
  ["/plugins/", { loader: () => import(/* webpackChunkName: "plugins_index.html" */"/data/data/com.termux/files/home/dvnge-website/plugins/index.md"), meta: {"title":"Dvnge 插件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/data/data/com.termux/files/home/dvnge-website/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
