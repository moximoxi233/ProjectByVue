<template>
    <div id="my">
        <div class="my-header">
            <router-link to="/selfpage">
                <img src="../assets/imgs/head.jpg" alt="">
                <span>username</span>
                <Icon type="ios-arrow-right" size="26" color="#fff" class="fr toMyself"></Icon>
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
        <div class="loginBox">
            <h2 class="logintitle">登录你的头条，精彩永不丢失</h2>
            <Input class="admin loginInfo" placeholder="账号"></Input>
            <Input class="admin loginInfo" placeholder="密码" type="password"></Input>
            <Button>登录</Button>
        </div>
        <ul class="midBar">
            <li is="router-link" class="fl collect isLi" to="/collect/my">
                <Icon type="cube" size="24" color="#f69e32"></Icon><br> 收藏
            </li>
            <li is="router-link" class="fl history isLi" to="/collect/readhistory">
                <Icon type="ios-timer-outline" size="24" color="#658cf5"></Icon><br> 历史
            </li>
        </ul>
        <div class="tipItems">
            消息通知
        </div>
        <router-link class="tipItems" to="/setup">
            设置
            <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toSetup"></Icon>
        </router-link>

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

<style>
</style>

