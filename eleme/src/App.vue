<template>
<div class="bg">
  <Header msg="粥品香坊"/>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评分</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">品牌</router-link>
    </div>
  </div>
  <keep-alive>
    <router-view :seller="seller"></router-view>
  </keep-alive>

</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body{
  margin: 0;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
}
.bg{
  height: 100vh;
  background-color: rgb(247, 247, 247);
}

</style>
