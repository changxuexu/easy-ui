module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "import",
      {
        // 按需加载使用时配置如下
        libraryName: "v-easyui123",
        style: (name) => {
          console.log('style-->>', name)
          // v-easyui123/lib/switch/index.js
          // 注意这里的name为组件所在的路径，按需加载样式配置提取对应组件名称的css即可
          return `v-easyui123/lib/style/${name.split('/')[2]}.css`
          //return `v-easyui123/lib/style/${name.slice(name.lastIndexOf('/') + 1, name.lastIndexOf('.'))}.css`
        },
        customName: (name) => {
          console.log('customName-->>', name)
          return `v-easyui123/lib/${name}/index.js`
        }
      }
    ]
  ]
}
