import Vue from 'vue';
import Router from 'vue-router';
//引入组件
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Collect from '../views/Collect.vue'
import Care from '../views/Care.vue'
import My from '../views/My.vue'
import Setup from '../views/Setup.vue'


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
            path: '/home/',
            redirect: '/home/hot?type=news_hot'
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
        },
        {
            path: '/collect/:kind',
            component: Collect,
            name: 'collect'
        },
        {
            path: '/collect/',
            // component: Collect,
            redirect: '/collect/my'
        },
        {
            path:'/care',
            component:Care,
            name:'care'
        },
        {
            path:'/my',
            component:My,
            name:'my'
        },
        {
            path:'/setup',
            component:Setup,
            name:'setup'
        }
    ]
})