import Vue from 'vue'
import App from './AppIe.vue'
import axios from 'axios'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element)
Vue.config.productionTip = true
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App)
}).$mount('#app')
