module.exports = {
  // 标题
  title: 'Hello VuePress',
  // 描述
  description: 'Just playing around',
  // 插件
  plugins: [
    'autobar'
  ],
  // 设置侧边栏
  themeConfig: {
    // 设置nav(右上角导航)
    nav: [
      { text: '首页', link: '/' },
      { 
          text: 'Ugmr的博客', 
          items: [
              { text: 'Github', link: 'https://github.com/ugmr' },
              { text: '掘金', link: 'https://juejin.cn' }
          ]
      }
    ],
  },
  
  base: "/docs/",
  dest: "dist"
}