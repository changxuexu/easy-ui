import Vue from "vue"
import App from "./App.vue"

// import HmUI from 'v-easyui123'
// Vue.use(HmUI)

// import { Button } from "v-easyui123";
// Vue.use(Button);
// console.log(Button);

// 导入全部组件库
import HmUI from "../packages"
Vue.use(HmUI)

// import { Button, Switch } from '../packages'
// Vue.use(Button).use(Switch)

Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount("#app")
