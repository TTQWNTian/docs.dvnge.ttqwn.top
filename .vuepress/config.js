// .vuepress/config.js
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { gitPlugin } from '@vuepress/plugin-git'
import { searchPlugin } from '@vuepress/plugin-search'
import { iconPlugin } from '@vuepress/plugin-icon'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { markdownFileTreePlugin } from '@vuepress/plugin-markdown-file-tree'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Dvnge',
  description: '欢迎来到本引擎的官方网站！',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  
  markdown: {
    html: true,
  },

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        {
          name: 'force-html-lang',
          transformIndexHtml(html) {
            return html.replace(/<html lang="[^"]*"/, '<html lang="zh-CN"')
          },
        },
      ],
    },
  }),

  theme: defaultTheme({
    logo: '/favicon.png',
    lastUpdated: true,
    contributors: true,
    
    repo: 'ttqwntian/dvnge-website',
    editLink: true,
    
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '最后更新',
        contributorsText: '贡献者',
        next: '下一页',
        prev: '上一页',
      },
    },
    
    navbar: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/' },
      { text: '插件', link: '/plugins/' },
    ],
    sidebar: {
      '/docs/': [
        {
          text: '开始',
          collapsible: true,
          children: [
            '/docs/Dvnge的文件.md',
            '/docs/章节概念.md',
            '/docs/什么是节点.md',
          ],
        },
        {
          text: '基础',
          collapsible: true,
          children: [
            '/docs/基础属性.md',
            '/docs/立绘.md',
          ],
        },
      ],
      '/plugins/': [
        {
          text: '插件列表',
          collapsible: true,
          children: [
            /*'/plugins/插件A.md',
            '/plugins/插件B.md',*/
          ],
        },
      ],
    },
  }),

  plugins: [
    prismjsPlugin({
      theme: 'shades-of-purple',
      lineNumbers: true,
    }),
    copyCodePlugin({ showInMobile: true }),
    gitPlugin({
      createdTime: true,
      updatedTime: true,
      contributors: true,
    }),
    searchPlugin(),
    iconPlugin(),
    markdownFileTreePlugin(),
  ],
})