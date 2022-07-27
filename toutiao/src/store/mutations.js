import * as type from './mutation-types.js'

export default{
    //将首页（home）发送的请求数据添加到list各项中，注：vuex中的数据是响应式的，如果内容发生改变根据更新后的内容进行页面渲染
    [type.GET_NEWSLIST](state,payload){
        for(var item in payload.data){
            state.list[payload.kind].push(payload.data[item])
        }
        state.downLoadMore=true
    },
    //
    
}