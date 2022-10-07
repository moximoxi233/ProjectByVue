# toutiao
## 项目实现
### 组件
#### （复用）组件
1. 底部导航组件 Bottom-nav
2. 评论组件 Comment
3. 页面顶部 Haeder-bar
4. 分享 Share
5. 回到顶部组件 To-Top 
#### 组件（路由组件）
1. 关注 Care
2. 收藏 Collection
3. 首页 Home
4. 我的 My
5. 编辑资料 Editprofile
6. 搜索页 Search
7. 个人主页 Selfpage
8. 设置 Setup
9. 新闻详情 Detail
#### 页面结构-各组件间的连接
- 【首页Home】：headerBar+bottomNav
    - 【新闻详情Detail】：headerBar+Comment+Share
    - 【搜索页 Search】：headerBar
        - 【新闻详情Detail】
- 【收藏 Collection】：headerBar+bottomNav
    - 【新闻详情Detail】：headerBar+Comment+Share
- 【关注 Care】：headerBar+bottomNav
    - 。。。
- 【我的 My】：headerBar+bottomNav
    - 【设置 Setup】
        - 【编辑资料 Editprofile】
    - 【个人主页 Selfpage】
        - 【编辑资料 Editprofile】
        - 【 新闻详情 Detail】
### Vuex
#### state
```javascript
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
    introduce:'',    //selfpage页 个人简介内容   
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
```
#### actions
> 部分比较复杂的业务逻辑（例如网络请求）需要先通过 dispatch提交给actions处理
```
getNews({commit,state},pay) //首页网络请求
pulldownloadmore({commit,state},payload)//下拉刷新后加载的数据
setUserInfo({commit,state},res) //登陆操作
setSignOut({commit}) //退出登录操作
```
#### mutations
```
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
```







### 相关基础补充

##### rem 单位
> rem 是css3新增的一个相对单位，相对于html根元素
> rem能等比例适配所有屏幕

### vue相关库

store、router
iview UI 图标使用：http://v4.iviewui.com/components/icon

### vue路由组件

组件结构：

### 本项目中复习到的知识