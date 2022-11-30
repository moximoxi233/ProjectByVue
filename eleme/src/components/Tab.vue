<template>
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
</template>
<script>
export default{
    name:'Tab'
}
</script>
<style lang="scss" scope>
 .tab{
    display: flex;
    width: 94%;
    margin: 2px auto;
    .tab-item{
      font-size: 18px;
      margin-right: 30px;
      display: flex;
      flex-direction: column;
      a{
        display: flex;
        flex-direction: column;
      color: #111;
      i{
          width: 20px;
          height: 4px;
          margin: 0 auto;
          display: inline-block;
      }
      }
      .active{
        font-weight: 600;

        i{
          background-color: rgb(146, 50, 50);
        }
      }
      

    }
  }
</style>