import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/public/reset.css'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入view ui组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(iView)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
