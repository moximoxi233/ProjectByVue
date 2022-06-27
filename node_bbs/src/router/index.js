import Vue from "vue";//
import Router from 'vue-router' //引入
//引入路由组件
import PostList from '../components/PostList.vue'
import Article from '../components/Article.vue'
import SiderBar from '../components/SiderBar.vue'
import Userinfo from '../components/Userinfo.vue'

Vue.use(Router)//使用



export default new Router({
    mode:'history',
    routes:[
        //主页-默认页面-根页面 get /topics
        {
            name:'root',
            path:'/',
            components:{
                main:PostList
            }

        },
        //文章详情  get /topic/:id
        {
            path:'/topic/:id&auther=:name',
            name:'post_content',
            components:{
                main:Article,
                siderbar:SiderBar
            }
        },
        //作者个人信息
        {
            name:'author',
            path:'/user/:loginname',
            components:{
                main:Userinfo
            }
        }

    ]
})