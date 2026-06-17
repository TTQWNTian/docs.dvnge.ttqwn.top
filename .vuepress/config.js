import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { gitPlugin } from '@vuepress/plugin-git'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Dvnge',
  description: 'Dvnge视觉小说引擎的官方文档',

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

    navbar: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/Dvnge的文件.html' },
      { text: 'GitHub', link: 'https://github.com/TTQWNTian/Dvnge' },
    ],

    sidebar: [
      {
        text: '开始',
        collapsible: true,
        children: [
          '/docs/Dvnge的文件.md',
          '/docs/章节概念.md',
        ],
      },
      {
        text: '基础',
        collapsible: true,
        children: [
          '/docs/什么是节点.md',
          '/docs/基础属性.md',
          '/docs/立绘系统.md',
        ],
      },
    ],
  }),

  plugins: [
    shikiPlugin({ theme: 'catppuccin-mocha' }),
    copyCodePlugin({ showInMobile: true }),
    gitPlugin({
      createdTime: true,
      updatedTime: true,
      contributors: true,
    }),
    searchPlugin(),
  ],
})