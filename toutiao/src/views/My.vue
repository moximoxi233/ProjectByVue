<template>
    <div id="my">
        <div class="my-header">
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
        </router-link>
        <router-link class="tipItems" to="/setup">
            设置
            <Icon type="sarrow-right" size="26" color="#ccc" class="fr toSetup"></Icon>
        </router-link>
        <div class="loginBox">
            <h2 class="logintitle">登录你的头条，精彩永不丢失</h2>
            <Input class="admin loginInfo" placeholder="请输入账号"></Input>
            <Input class="admin loginInfo" placeholder="请输入密码" type="password"></Input>
            <Button>登&nbsp;录</Button>
            <!-- <Button>登&nbsp;录</Button> -->
        </div>

        <bottomNav></bottomNav>
    </div>
</template>

<script>
// import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'

export default{
    components:{
        // headerBar,
        bottomNav
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
    width: 100%;
    margin-top: 0.3rem;
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
    margin: auto auto;
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

