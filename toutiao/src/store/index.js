import Vue from 'vue'
//由于本项目为vue2项目所以应该下载的vuex@3
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state={
    loading:true,   //新闻列表切换时loading图片展示
    ifReturnMsg:'', //是否有数据返回
    userName:JSON.parse(localStorage.getItem('userName')) || {},        //用户名
    logined:JSON.parse(localStorage.getItem('loginStatus')) || false,   //用户名
    Sharebox:false, //sharebox组件是否显示
    showLog_off:true,   //setup页推出登陆是否显示
    routerChange:true,  //路由变化
    downLoadMore:false, //首页新闻底部是否加载更多
    hasIntroduce:false, //是否已有个人简介
    collected:false,    //是否收藏
    hasIntroduce:'',    //selfpage页 个人简介内容   
    vitality:{          //my页个人信息
        follow:14,
        fans:200,
        visitor:1
    },
    list:{              //首页新闻栏目内容列表
        __all__:[],
        news_hot:[],
        news_society:[],
        news_entertainment:[],
        news_tech:[],
        news_car:[],
        news_sports:[],
        news_finance:[],
        news_military:[],
        news_world:[],
        news_fashion:[]
    },
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
