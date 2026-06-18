export const SEARCH_INDEX = [
  {
    "title": "首页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Dvnge插件",
    "headers": [],
    "path": "/plugins/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Dvnge的文件",
    "headers": [
      {
        "level": 2,
        "title": "css/样式.css",
        "slug": "css-样式-css",
        "link": "#css-样式-css",
        "children": []
      },
      {
        "level": 2,
        "title": "css/动画.css",
        "slug": "css-动画-css",
        "link": "#css-动画-css",
        "children": []
      },
      {
        "level": 2,
        "title": "js/TTQ视觉小说引擎.js",
        "slug": "js-ttq视觉小说引擎-js",
        "link": "#js-ttq视觉小说引擎-js",
        "children": []
      },
      {
        "level": 2,
        "title": "js/自定义功能.js",
        "slug": "js-自定义功能-js",
        "link": "#js-自定义功能-js",
        "children": []
      },
      {
        "level": 2,
        "title": "js/导出入存档功能.js",
        "slug": "js-导出入存档功能-js",
        "link": "#js-导出入存档功能-js",
        "children": []
      },
      {
        "level": 2,
        "title": "js/样式配置.js",
        "slug": "js-样式配置-js",
        "link": "#js-样式配置-js",
        "children": []
      },
      {
        "level": 2,
        "title": "章节/",
        "slug": "章节",
        "link": "#章节",
        "children": []
      },
      {
        "level": 2,
        "title": "game.html",
        "slug": "game-html",
        "link": "#game-html",
        "children": []
      },
      {
        "level": 2,
        "title": "index.html",
        "slug": "index-html",
        "link": "#index-html",
        "children": []
      },
      {
        "level": 2,
        "title": "LICENSE.txt",
        "slug": "license-txt",
        "link": "#license-txt",
        "children": []
      }
    ],
    "path": "/docs/Dvnge%E7%9A%84%E6%96%87%E4%BB%B6.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "什么是节点？",
    "headers": [],
    "path": "/docs/%E4%BB%80%E4%B9%88%E6%98%AF%E8%8A%82%E7%82%B9.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "基础属性",
    "headers": [
      {
        "level": 2,
        "title": "角色",
        "slug": "角色",
        "link": "#角色",
        "children": []
      },
      {
        "level": 2,
        "title": "内容",
        "slug": "内容",
        "link": "#内容",
        "children": []
      },
      {
        "level": 2,
        "title": "音乐",
        "slug": "音乐",
        "link": "#音乐",
        "children": []
      },
      {
        "level": 2,
        "title": "音效",
        "slug": "音效",
        "link": "#音效",
        "children": []
      },
      {
        "level": 2,
        "title": "标签",
        "slug": "标签",
        "link": "#标签",
        "children": []
      }
    ],
    "path": "/docs/%E5%9F%BA%E7%A1%80%E5%B1%9E%E6%80%A7.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "立绘系统",
    "headers": [
      {
        "level": 2,
        "title": "立绘显示",
        "slug": "立绘显示",
        "link": "#立绘显示",
        "children": []
      },
      {
        "level": 2,
        "title": "立绘切换",
        "slug": "立绘切换",
        "link": "#立绘切换",
        "children": []
      },
      {
        "level": 2,
        "title": "立绘隐藏",
        "slug": "立绘隐藏",
        "link": "#立绘隐藏",
        "children": []
      },
      {
        "level": 2,
        "title": "变量路径",
        "slug": "变量路径",
        "link": "#变量路径",
        "children": []
      }
    ],
    "path": "/docs/%E7%AB%8B%E7%BB%98%E7%B3%BB%E7%BB%9F.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "章节概念",
    "headers": [],
    "path": "/docs/%E7%AB%A0%E8%8A%82%E6%A6%82%E5%BF%B5.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
