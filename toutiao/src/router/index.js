import Vue from 'vue';
import Router from 'vue-router';
//引入组件
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'


//使用路由
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {
            path:'/home/:type',
            name:'home',
            component:Home
        },
        {
            path: '*',
            redirect: '/home/all?type=__all__'
        },
        {
            path: '',
            redirect: '/home/all?type=__all__'
        },
        {
            path:'/newsDetails/:id',
            component:Detail,
            name:'newsdetails'
        }
    ]
})