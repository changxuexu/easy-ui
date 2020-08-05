import Vue from "vue"
import App from "./App.vue"

// 组件库全部加载编写测试
// import HmUI from "../packages"
// Vue.use(HmUI)

// import aa from "../packages/switch"
// Vue.use(aa)

// import aa from "../lib/switch"
// import '../lib/style/switch.css'
// Vue.use(aa)

// npm包-v-easyui123引用
// 全部加载
// import 'v-easyui123/lib/style/index.css'
// import HmUI from 'v-easyui123/lib/index/index.js'
// Vue.use(HmUI)

// 按需加载 - 存在问题：babel-plugin-import样式不能按需加载
import 'v-easyui123/lib/style/switch.css'
import { Switch } from "v-easyui123";
Vue.use(Switch);

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount("#app")
