<template>
  <div id="app" class="app">
    <cn-header></cn-header>
    <div class="container">
    <router-view name="main"></router-view>
    <router-view name="siderbar"></router-view>
    </div>
  </div>
</template>

<script>
import cnHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    cnHeader
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: antiquewhite;
} */
*{
  margin: 0;
  padding: 0;

}
body{
  background-color: rgb(232, 232, 232);
  /* display: flex; */
  /* width: 100vw; */
  /* justify-content: center; */
  /* align-items: center; */
  /* margin: 0 auto; */
}
.container{
  display: flex;
  width: 100vw;
  justify-content: center;
  /* align-items: center; */
}
ul{
  padding: 0;
}
li{
  list-style: none;
  
}

a{
  text-decoration: none;
  cursor: pointer;
}

</style>
