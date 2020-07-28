import Vue from 'vue'
import App from './App.vue'
// 导入全部组件库
import HmUI from '../packages'
Vue.use(HmUI)

// import HmUI from '../packages'
// let { Button, Switch } = HmUI
// Vue.use(Button).use(Switch)

// import { install } from '../packages'
// Vue.use(install)

// import { Button, Switch } from '../packages'
// Vue.use(Button).use(Switch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
