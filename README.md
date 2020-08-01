#基于 vue-cli3，参考 element-ui 封装的一个 UI 组件库

https://www.bilibili.com/video/BV1nJ411V75n?p=23

```html
搭建一个按需加载的组件库要点： 组件独立打包：单个文件对应单个组件 引入 代码转换
的插件 https://cloud.tencent.com/developer/article/1613301 cnpm i v-easyui123
package 打包成库命令：vue-cli文档查看 "lib":"vue-cli-service build --target lib
packages/index.js"
```

```html
编写组件技巧： 涉及知识点： 1.vue基础语法 2.组件基本语法
3.组件通讯（sync,provide,inject） 4.插槽使用 5.props校验 6.过渡与动画处理
7.计算属性与监听属性 8.v-model语法糖 9.vue插件机制 9.npm发布 其他：
$slots.default 控制slot显示与隐藏 子组件改变值： 1 .sync 使用 2.v-model 父组件
<zoom v-model="zoom"></zoom>
本质是下面用法：
<zoom :value="zoom" @input="zoom = $event.target.value"></zoom>

子组件： //props值必须为value props: { value: { type: Number, default: 100 }
this.$emit('input', zoom) //事件名必须为input 参考：
https://github.com/hucongcong/itcast-ui
```

```html
// 全量导出 import JRUI from "easy-ui"; import "easy-ui/lib/index/index.css";
Vue.use(JRUI); //babel-plugin-component npm install babel-plugin-component -D
bable.congig.js 来配置: module.exports = { presets: [
'@vue/cli-plugin-babel/preset' ], plugins: [ [ "component", // 1.全局引入 // {
// "libraryName": "公司自己的组件库", // "camel2Dash": false, // "libDir":
"dist", // "style": false // } // 2.按需引入 { //组件库的名字,需要和
package.json 里的 name 相同 "libraryName": "meri-design", //
是否把驼峰转换成xx-xx的写法 "camel2Dash": false, "libDir": "dist",
"styleLibrary": { // css目录的名字 "name": "theme",
//是否每个组件都默认引用base.css "base": true } } ], ["component", {
"libraryName": "element-ui", "styleLibraryName": "theme-chalk" }, 　　　　　"el"
//用来标识是不一样的，如果不添加 会报错 ] ] }
https://www.jianshu.com/p/91ac2a59f5ae //babel-plugin-import 基础导出 npm i
babel-plugin-import -D babel.config.js配置: module.exports = { presets:
["@vue/app", ["@babel/preset-env", { "modules": false }]], plugins: [ [
"import", { "libraryName": "jr-ui", "style": (name) => { return
`${name}/style.css`; } } ] ] } import { MusicPlayer } from "jr-ui";
Vue.use(MusicPlayer);
```
