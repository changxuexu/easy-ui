const path = require("path")
module.exports = {
  pages: {
    index: {
      //page 的入口
      entry: "examples/main.js",
      //模板来源
      template: "public/index.html",
      //在 dist/index.html 的输出
      filename: "index.html"
    }
  },
  lintOnSave: false,
  chainWebpack: config => {
    //使用npm run lib 构建全局库起作用
    // 扩展 webpack 配置，使 packages 加入编译
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
