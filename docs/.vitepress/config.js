import { defineConfig } from 'vite';

// 中文文档 https://process1024.github.io/vitepress/guide/what-is-vitepress
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Intelligent Computing & Applications Lab',
  description: '智能计算与应用实验室',
  base: '/',
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 头部导航
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Research', link: '/research' },
      { text: 'Our Team', link: '/team' },
      { text: 'Publications', link: '/publications' },
      { text: 'Contact', link: '/contact' },
    ],
  },
});
