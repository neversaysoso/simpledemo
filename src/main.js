import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-default/index.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
