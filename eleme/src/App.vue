<template>
<div class="bg">
  <Header msg="粥品香坊"/>
  <div class="tab">
    <div class="tab-item">
      <i></i>
      <router-link to="/goods">商品<i></i></router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评分<i></i></router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">品牌<i></i></router-link>
    </div>
  </div>
  <keep-alive>
    <router-view :seller="seller"></router-view>
  </keep-alive>

</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" scope>
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
  .tab{
    display: flex;
    width: 94%;
    margin: auto;
    .tab-item{
      font-size: 18px;
      font-weight: 800;
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      a{
        display: flex;
        flex-direction: column;
      color: rgb(79, 79, 79);
      i{
          width: 20px;
          height: 4px;
          margin: 0 auto;
          display: inline-block;
      }
      }
      .active{
        color: black;
        i{
          background-color: rgb(146, 50, 50);
        }
      }
      

    }
  }
}

</style>
