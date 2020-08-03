import Vue from "vue"
import App from "./App.vue"

// 组件库全部加载编写测试
// import HmUI from "../packages"
// Vue.use(HmUI)

// 全部加载
import HmUI from 'v-easyui123'
Vue.use(HmUI)

// 按需加载
// import { Switch } from "v-easyui123";
// Vue.use(Switch);

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount("#app")
