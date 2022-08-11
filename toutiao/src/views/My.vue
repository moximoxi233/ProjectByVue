<template>
    <div id="my" >
        <div v-if="logined">
            <div class="my-header" >
            <router-link to="/selfpage"  class="my-info">
                <img src="../assets/imgs/head.jpg" alt="" class="headimg">
                <span>username</span>
                <Icon type="ios-arrow-forward" size="26" color="#fff" class="fr toMyself"></Icon>
            </router-link>
            <ul class="info-bar clearfix">
            <router-link to="/selfpage" class="info-bar-item">
                <p>1</p>
                动态
            </router-link>
            <router-link to="/care" class="info-bar-item">
                <p>1</p>
                关注
            </router-link>
            <router-link to="/care" class="info-bar-item">
                <p>1</p>
                粉丝
            </router-link>
            <router-link to="/care" class="info-bar-item">
                <p>1</p>
                7天访问
            </router-link>
        </ul>
        </div>
        
        <ul class="midBar">
            <li is="router-link" class="fl collect isLi" to="/collect/my">
                <Icon type="md-cube" size="24" color="#f69e32"></Icon><br> 收藏
            </li>
            <li is="router-link" class="fl history isLi" to="/collect/readhistory">
                <Icon type="ios-timer-outline" size="24" color="#658cf5"></Icon><br> 历史
            </li>
        </ul>
        <router-link class="tipItems" to="/">
            消息通知
            <Icon type="ios-arrow-forward" size="26" color="#ccc" class="fr toSetup"/>
        </router-link>
        <router-link class="tipItems" to="/setup">
            设置
            <Icon type="ios-arrow-forward" size="26" color="#ccc" class="fr toSetup"/>
            <!-- <Icon type="sarrow-right" size="26" color="#ccc" class="fr toSetup"></Icon> -->
        </router-link>
        </div>
        <!-- 登录板块 -->
        <div class="loginBox" v-else>
            <h2 class="logintitle">登录你的头条，精彩永不丢失</h2>
            <Input class="admin loginInfo" placeholder="请输入账号" v-model="admin"></Input>
            <Input class="admin loginInfo" placeholder="请输入密码" type="password" v-model="password"></Input>
            <Button @click="login" @keyup.enter='login' >登&nbsp;录</Button>
            <!-- <Button>登&nbsp;录</Button> -->
        </div>

        <bottomNav></bottomNav>
    </div>
</template>

<script>
import * as type from '../store/mutation-types.js'
import {mapGetters,mapActions} from 'vuex'
import bottomNav from '../components/Bottom-nav.vue'

export default{
    
    components:{
        // headerBar,
        bottomNav
    },
    data(){
        return{
            admin:'',
            password:''
        }
    },
    computed:{
        ...mapGetters([
            'userName','vitality','logined'
        ])
    },
    methods:{
        ...mapActions(['setUserInfo']),
        login(){
            if(this.admin==='admin'&&this.password==='admin'){
                this.setUserInfo(this.admin);
                this.$store.commit(type.LOGOFF,true);
                console.log('目前登录状态',this.logined)
                this.admin='';
                this.password='';
            }else if(this.admin===''){
                this.open('1')

            }else if(this.password===''){
                this.open('2')
            }else{
                this.open('2')
                
            }
                
        },
        open(nodesc){
            if(nodesc==='1'){
                this.$Notice.open({
                    title:'账号不能为空',
                    duration:2
                })
            }else if(nodesc==='2'){
                this.$Notice.open({
                    title:'密码不能为空',
                    duration:2
                })
            }else{
                this.$Notice.open({
                    title:'账号或密码错误',
                    duration:2
                })
            }
        
        }
    }

}
</script>

<style lang="less">
@import '../assets/css/border.less';
.my-header{
    background: rgba(51,51,51,1);
    color: #fff;
    .my-info{
        display: block;
        height: 4rem;
        width: 100%;
            .headimg{
                float: left;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-top: 1.4rem;
            margin-left: 1rem;
            }
            span{
                float: left;
                margin-top: 1.8rem;
                margin-left: 0.6rem;
                font-size: 18px;
                font-weight: bold;
                color: #ffd;
                // margin-top: 1.6rem;
                // margin-left: 0.7rem;
            }
            .toMyself{
                float: right;
                margin-top:1.8rem ;
                margin-right: 0.6rem;
                width: 20px;
                height: 20px;
            }
    }
    .info-bar{
        height: 2rem;
        .info-bar-item{
            float: left;
            color: #fff;
            font-size: 0.4rem;
            text-align: center;
            padding: 0.2rem;
            margin-left: 1rem;



    }

    }
    

}
.midBar{
    position: relative;
    width: 100%;
    height: 1.7rem;
    padding: 0.3rem 0;
    .borderBottom(1px,#ccc);
    // background-color: aqua;
    .isLi{
        text-align: center;
        width: 50%;
        color: black;
    }
    .collect{
        position: relative;
        display: block;     
        &::after {
            content: "";
            box-sizing: border-box;
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
            border-right: 1px solid #bbb;
            @media screen and (-webkit-min-device-pixel-ratio: 3) {
                transform: scaleY(0.33333);
            }
            @media screen and (-webkit-min-device-pixel-ratio: 2) {
                transform: scaleY(0.5);
            }
        }
    
    }

}
.tipItems {
    display: block;
    height: 1.1rem;
    // background: #d43d3d;
    width: 100%;
    margin-top: 0.4rem;
    color: #000;
    font-size: 16px;
    line-height: 1.1rem;
    font-weight: bold;
    position: relative;
    padding-left: 0.3rem;
    .verticalBorder(1px,#ccc);
    .toSetup{
        margin-right: .3rem;
        margin-top: .2rem;
    }
}
// 登录
.loginBox{
    width: 98%;
    padding: 0.2rem;
    background: #d43d3d;
    color: #fff;
    margin: 0.4rem auto;
    padding: 1rem;
    border-radius: 0.4rem;
    .logintitle{
        text-align: center;
        margin-bottom: 0.6rem;
    }
    input{
        font-size: 0.5rem;
        height: 1.2rem;
        margin-bottom: 0.8rem;
        border-radius: 0.3rem;
        padding-left: 0.4rem;
    }
    Button{
        display: block;
        margin: 0.2rem auto;
        width: 3rem;
        background: #d43d3d;
        color: #fff;
        text-align: center;
        font-size: 0.5rem;
        border-radius: 0.5rem;

    }
    }

</style>

