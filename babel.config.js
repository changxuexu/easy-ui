module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    [
      "import",
      {
        // 组件库的名字，需要和 package.json 里的 name 相同
        "libraryName": "v-easyui123",
        // 存放组件的文件夹，如果不想配置此项，默认文件夹的名字为 lib
        // "libDir": "packages",
        // "camel2DashComponentName": false,//关闭驼峰自动转链式
        // "camel2UnderlineComponentName": false//关闭蛇形自动转链
      }
    ]
  ]
}
