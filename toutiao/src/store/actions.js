//部分比较复杂的业务逻辑（例如网络请求）需要先通过 dispatch提交给actions处理
import axios from 'axios'
import jsonp from 'jsonp'

import * as type from './mutation-types'

export default{
    getNews({commit,state},pay){//首页网络请求
        if(pay.kind&&pay.flag){
            jsonp('http://m.toutiao.com/list/?tag='+pay.kind+'&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time='+parseInt((new Date().getTime())/1000),
                function(err,res){
                    // if(res){
                    //     console.log('请求成功喽')
                    //     console.log(res.data)
                    // }
                    commit(type.GET_NEWSLIST,{
                        data:res.data,
                        kind:pay.kind
                    });
                    commit(type.CHANGE_LOADING_STATE,false);
                    if(res.return_count){
                        commit(type.RETURN,true)
                    }else{
                        commit(type.RETURN,false)
                    }
                })
        }
    },
    pulldownloadmore({commit,state},payload){   //下拉刷新后加载的数据
        if(payload.flag&&payload.kind){
            commit(type.PULLDOWNBTN,false)
            jsonp('http://m.toutiao.com/list/?tag='+payload.kind+'&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time='+parseInt((new Date().getTime())/1000),
                function(err,res){
                    commit(type.GET_NEWSLIST,{
                        data:res.data,
                        kind:payload.kind
                    })
                })
        }
    },
    setUserInfo({commit,state},res){            //登陆操作
        localStorage.setItem('userName',JSON.stringify(res))
        localStorage.setItem('logined',true)
        commit(type.GETUSERDATA,res)
        commit(type.LOGINING,true)
    },
    setSignOut({commit}){               //退出登录操作
        localStorage.removeItem('userName');
        localStorage.setItem('logined',false)
        commit(type.LOGINING,false)
        commit(type.LOGOFF,false)

    }
}