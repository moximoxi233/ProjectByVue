<template>
    <div id="setup">
        <headerBar>
            <div class="setup_hearder" slot="setup-header">
                <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" @click.native="$router.go(-1)"></Icon>
                设置
            </div>
        </headerBar>
        <div class="item">
            <router-link to='/editprofile' class="setup_item" v-show="showLog_off&&logined">
            编辑资料
            <Icon type="ios-arrow-forward" size="26" color="#ccc" class="fr toSetup"/>
            </router-link>
            <div class="setup_item">账号和绑定设置</div>
            <div class="setup_item">黑名单</div>
            <div class="setup_item">清楚缓存</div>
            <div class="setup_item">字体大小</div>
            <div class="setup_item hasSwith">列表显示摘要<i-switch class="fr toSetup"></i-switch></div>
            <div class="setup_item">非WIFI网络流量</div>
            <div class="setup_item">非WIFI网络播放提醒</div>
            <div class="setup_item hasSwith">推送通知<i-switch class="fr toSetup" v-model="sign"></i-switch></div>
        </div>
        <div class="log_off" @click='logOff' v-show="logined">退出登录</div>
        <Modal title="退出确认" v-model="modal" class-name="vertical-center-modal" @on-ok="ok">
        <p>退出当前账号，将不能同步收藏，发布评论和云端分享等</p>
    </Modal>
    </div>
</template>
<script>
import headerBar from '../components/Header-bar.vue'
import * as type from '../store/mutation-types.js'
import {mapActions,mapGetters} from 'vuex'
// import { component } from 'vue/types/umd'
export default{
    components:{
        headerBar
    },
    data(){
        return {
            modal:false,
            sign:true
        }
    },
    methods:{
        ...mapActions(['setSignOut']),
        logOff(){
            this.modal=true;
        },
        ok(){
            localStorage.removeItem('userName')
            this.setSignOut()
            this.$router.push({path:'/my'})
        }
    },
    computed:{
        ...mapGetters([
            'showLog_off',
            'logined'
        ])
    }
}
</script>
<style lang="less">
@import '../assets/css/border.less';
.setup_hearder{
        background: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 800;
        color: black;
        text-align: center;
        .borderBottom(1px,#ccc);
        .back{
            line-height: 1.2rem;
            margin-left: 0.2rem;
        }
       
    }

.item{
    width: 100%;
    position: relative;
    margin-top: 1.4rem;
    .setup_item{
        position: relative;
        display: block;
        font-size: 16px;
        height: 1.2rem;
        line-height: 1.2rem;
        padding-left: 0.4rem;
        font-weight: 600;
        color: black;
        .borderBottom(1px,#ccc);
        // .borderBottom(1px,#ccc);
        .toSetup{
            line-height: 1.2rem;
        }
    }
    .hasSwith{
        span{
            display: inline;
            margin-top: 0.2rem;
            margin-right: 0.2rem;
        }
    }
    
}
.log_off{
    color: red;
    border: 1px solid red;
    font-size: 18px;
    width: 2rem;
    // padding: 0.8rem;
    border-radius: 0.8rem;
    text-align: center;
    margin: 10px auto;
    width: 3.4rem;
    height: 1.1rem;
    line-height: 1.1rem;
    letter-spacing: 2px;
}
</style>
