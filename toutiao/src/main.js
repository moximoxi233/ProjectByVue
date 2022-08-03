import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/public/reset.css'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload  from 'vue-lazyload'

//引入view ui组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(iView)
Vue.use(VueLazyload, {
  loading: require("./assets/logo.png"), // 懒加载默认图片
  });

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
