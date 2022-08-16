<template>
    <div id="care">
        <headerBar>
            <div slot="care" class="home-header-bar"><span>我的关注</span></div>
        </headerBar>

        <bottomNav>

        </bottomNav>
    </div>
</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'

export default{
    components:{
        headerBar,
        bottomNav
    }
}
</script>

<style lang="less">
.home-header-bar{
    font-size: 18px;
}
</style>

