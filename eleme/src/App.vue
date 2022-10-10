<template>
<div class="bg">
  <Header msg="粥品香坊"/>

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
