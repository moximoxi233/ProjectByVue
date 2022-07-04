import Vue from 'vue';
import Router from 'vue-router';
//引入组件
import Test from '../components/Test.vue'


//使用路由
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {
            name:'root',
            path:'/test',
            component:Test
        },
        {
            path:'*',
            redirect:'/test'
            
        }
    ]
})