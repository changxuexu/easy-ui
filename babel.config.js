module.exports = {
  presets: [
    "@vue/app"
  ],
  "plugins": [
    [
      "import",
      {
        // 组件库的名字，需要和 package.json 里的 name 相同
        "libraryName": "v-easyui123",
        // "styleLibraryDirectory": "lib/style",
        // "libraryDirectory": 'test',
        style: true,
        // camel2DashComponentName: false,
        // camel2UnderlineComponentName: false,
        // customStyleName: (name) => {
        //   console.log(name)
        //   return `v-easyui123/lib/style/${name}.css` // 核心配置 根据你自己的组件目录配置
        // },
      }
    ]
  ]
}
