import { createApp } from 'vue'
import App from './App.vue'
//使用elemntui的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//路由
import router from'./router'
//状态管理
import store from './store'
const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.use(store)
app.mount('#app')
router.push('goods')

