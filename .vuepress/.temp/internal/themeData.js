export const themeData = JSON.parse("{\"logo\":\"/favicon.png\",\"lastUpdated\":true,\"contributors\":true,\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"文档\",\"link\":\"/docs/Dvnge的文件.html\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/TTQWNTian/Dvnge\"}],\"sidebar\":[{\"text\":\"开始\",\"collapsible\":true,\"children\":[\"/docs/Dvnge的文件.md\",\"/docs/章节概念.md\"]},{\"text\":\"基础\",\"collapsible\":true,\"children\":[\"/docs/什么是节点.md\",\"/docs/基础属性.md\",\"/docs/立绘系统.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
