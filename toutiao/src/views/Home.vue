<template>
<div id="home">
    <headerBar></headerBar>
    <bottomNav></bottomNav>
    <toTop></toTop>  
</div>
    

</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import toTop from '../components/To-top'
export default{
    components:{
      headerBar,
      bottomNav,
      toTop  
    }
}
</script>


<style>
#home{
  height: 400px;
  background-color: beige;
}
</style>