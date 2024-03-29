import * as type from './mutation-types.js'

export default{
    //将首页（home）发送的请求数据添加到list各项中，注：vuex中的数据是响应式的，如果内容发生改变根据更新后的内容进行页面渲染
    [type.GET_NEWSLIST](state,payload){
        for(var item in payload.data){
            // console.log('请求中的数据'+item)
            state.list[payload.kind].push(payload.data[item])
            // console.log('list'+state.list[payload.kind])

        }
        state.downLoadMore=true
    },
    //新闻切换时 loading 图片的战术
    [type.CHANGE_LOADING_STATE](state,flag){
        state.loading=flag
    },
    //判断是否有数据请求返回
    [type.RETURN](state,flag){
        state.ifReturnMsg=flag
    },
    //控制下拉加载数据的按钮
    [type.PULLDOWNBTN](state, sign){
        state.downLoadMore = sign;
    },
    //判断路有变化
    [type.ROUTERCHANGE](state, sign){
        state.routerChange = sign;
    },
    //登录和退出
    [type.LOGINING](state,payload){
        state.logined=payload
    },
    //是否展示退出登录按钮
    [type.LOGOFF](state,sign){
        state.showLog_off=sign
    },
    //渲染用户名
    [type.GETUSERDATA](state,res){
        state.userName=res
    },
    //shareBox分享狂是否展示
    [type.SHOWSHAREBOX](state,sign){
        state.Sharebox=sign
    },
    //修改个人简介
    [type.CHANGEINTRODUCE](state,introduce){
        state.introduce=introduce;
        state.hasIntroduce=true
    }


}