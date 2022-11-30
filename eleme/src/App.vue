<template>
<div class="bg">
  <!-- <router-view :seller="seller"></router-view> -->

  <keep-alive>
    <router-view :seller="seller"></router-view>
  </keep-alive>

</div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/Header'
export default {
  name: 'App',
  components: {
    // Header
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
  color: #333;
}
.bg{
  height: 100vh;
  background-color: rgb(255 255 255);
 
}

</style>
