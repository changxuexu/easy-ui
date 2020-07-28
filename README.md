#基于vue-cli3，参考element-ui封装的一个UI组件库
```html
  搭建一个按需加载的组件库要点：
    组件独立打包：单个文件对应单个组件
    引入 代码转换 的插件
  
  https://cloud.tencent.com/developer/article/1613301

  cnpm i v-easyui123

```


```html
// 全量导出
  import JRUI from "easy-ui";
  import "easy-ui/lib/index/index.css";
  Vue.use(JRUI);

//babel-plugin-component
  npm install babel-plugin-component -D
  bable.congig.js 来配置:
    module.exports = {
      presets: [ '@vue/cli-plugin-babel/preset' ],
      plugins: [
        [ "component",
          // 1.全局引入
          // {
          //   "libraryName": "公司自己的组件库",
          //   "camel2Dash": false,
          //   "libDir": "dist",
          //   "style": false
          // }
          // 2.按需引入
          {
              //组件库的名字,需要和 package.json 里的 name 相同
              "libraryName": "meri-design",
              // 是否把驼峰转换成xx-xx的写法
              "camel2Dash": false,
              "libDir": "dist",
              "styleLibrary": {
                 // css目录的名字
                "name": "theme", 
                //是否每个组件都默认引用base.css
                "base": true
              }
          }
        ], 
        ["component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          },
　　　　　"el"  //用来标识是不一样的，如果不添加 会报错
        ]
      ]
    }

    https://www.jianshu.com/p/91ac2a59f5ae

//babel-plugin-import 基础导出
  npm i babel-plugin-import -D
  babel.config.js配置:
    module.exports = {
    presets: ["@vue/app", ["@babel/preset-env", { "modules": false }]],
    plugins: [
      [
      "import",
      {
        "libraryName": "jr-ui",
        "style": (name) => {
          return `${name}/style.css`;
        }
      }
      ]
    ]
  }

  import { MusicPlayer } from "jr-ui";
  Vue.use(MusicPlayer);
```