import Vue from 'vue';
import Router from 'vue-router';
//引入组件
import Home from '../views/Home.vue'


//使用路由
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {
            name:'root',
            path:'/home',
            component:Home
        },
        {
            path:'*',
            redirect:'/home'
            
        }
    ]
})