import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar:[
        {
            text: 'Home',
            link: '/'
        },{
            text: 'Guide',
            link: '/guide/'
        },
        { text: 'ChangeLog', link: '/CHANGELOG.md' }
    ],
  }),
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
})