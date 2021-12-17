import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant组件
import {
  Button,
  Calendar,
  Popup,
  Icon,
  Tab,
  Tabs
} from 'vant'
import 'vant/lib/index.css'

// 按需引入
Vue.use(Button)
Vue.use(Calendar)
Vue.use(Popup)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
