<template>
 <ul class="nav">
    <router-link to="/home/" class="navItems">
        <div class="bottom_nav_icon"></div>
        <div class="bottom_nav_text">首页</div>
    </router-link>
    <router-link to="/collect/my" class="navItems">
        <div class="bottom_nav_icon"></div>
        <div class="bottom_nav_text">收藏</div>
    </router-link>
    <router-link to="/care" class="navItems">
        <div class="bottom_nav_icon"></div>
        <div class="bottom_nav_text">关注</div>
    </router-link>
    <router-link to="/my" class="navItems">
        <div class="bottom_nav_icon"></div>
        <div class="bottom_nav_text">我的</div>
    </router-link>

 </ul>

    
</template>
<script>
export default{

}
</script>
<style lang="less">
.nav{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: blueviolet;
}
</style>