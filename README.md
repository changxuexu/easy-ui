#基于 vue-cli4，参考 element-ui 封装的一个 UI 组件库

<pre>
v-easyui123组件使用：
  安装：
    cnpm i v-easyui123 --save
    cnpm install babel-plugin-import --save-dev
      配置见babel.config.js文件

  使用组件：
    全部加载：
      import HmUI from 'v-easyui123'
      Vue.use(HmUI)
    
    按需加载
      import { Switch } from "v-easyui123";
      Vue.use(Switch);



  编写组件涉及知识点： 
    1.vue基础语法 
    2.组件基本语法
    3.组件通讯（sync,provide,inject） 
    4.插槽使用 
    5.props校验 
    6.过渡与动画处理
    7.计算属性与监听属性 
    8.v-model语法糖 
    9.vue插件机制 
    10.npm发布 

  按需加载：
    babel-plugin-component
    babel-plugin-import
      https://www.jianshu.com/p/87efabb6a333
      
      { "libraryName": "antd", style: "css" }
      import { Button } from 'antd';
      ReactDOM.render(<Button>xxxx</Button>);

      var _button = require('antd/lib/button');
      require('antd/lib/button/style/css');
      <!-- require('antd/lib/button/style'); style: true -->
      ReactDOM.render(<_button>xxxx</_button>);
    
  打包发布package.json:
    "build": "vue-cli-service build"
    "lib":"vue-cli-service build --target lib packages/index.js"

  参考文档：
    vue-cli3.0/4.0
      https://www.mk2048.com/blog/blog_hjb00j1a01cbb.html
      https://www.jb51.net/article/186015.htm
      
    vue-cli2.0
      https://zhuanlan.zhihu.com/p/30948290
      https://www.jb51.net/article/166455.htm
      https://www.cnblogs.com/fan-zha/p/10917675.html

  细节：
    1.$slots.default 控制slot显示与隐藏 子组件改变值： 
    2.sync 使用 
      <comp :myMessage.sync="bar"></comp>
      语法糖：
        <comp :myMessage="bar" @update:myMessage="func"></comp>
        子组件：
          this.$emit('update:myMessage',params);
          
    3.v-model 父组件
      <zoom v-model="zoom"></zoom>
      语法糖：
        <zoom :value="zoom" @input="zoom = $event.target.value"></zoom>
        子组件： 
          props值必须为value props: { value: { type: Number, default: 100 }
          this.$emit('input', zoom) //事件名必须为input 
</pre>