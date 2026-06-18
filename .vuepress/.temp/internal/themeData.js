export const themeData = JSON.parse("{\"logo\":\"/favicon.png\",\"lastUpdated\":true,\"contributors\":true,\"repo\":\"ttqwntian/dvnge-site\",\"editLink\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"最后更新\",\"contributorsText\":\"贡献者\",\"next\":\"下一页\",\"prev\":\"上一页\"}},\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"文档\",\"link\":\"/docs/Dvnge的文件.html\"}],\"sidebar\":[{\"text\":\"开始\",\"collapsible\":true,\"children\":[\"/docs/Dvnge的文件.md\",\"/docs/章节概念.md\",\"/docs/什么是节点.md\"]},{\"text\":\"基础\",\"collapsible\":true,\"children\":[\"/docs/基础属性.md\",\"/docs/立绘系统.md\"]}],\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
