<template>
<!-- Carcontrol===购物车控制 -->

    <!-- 添加购物车 -->
    <div class="carControl">
        <!-- 减 -->
        <span class="dec circleDec">-</span>
        <!-- 加购数量 -->
        <span class="count">2</span>
        <!-- 加 -->
        <span class="add circleAdd">+</span>
    </div>
</template>
<script>
export default{
    name:'Carcontrol'
}
</script>

<style lang='scss' scope>
.carControl{
  display: flex;
  justify-content: space-between;
  span{
    display: block;
    text-align: center;
    // box-sizing: border-box;
    width: 20px;
    height: 20px;
    // writing-mode: vertical-lr;
    line-height: 18px;
  }
  .count{
    margin: 0 6px;
    line-height: 22px;
  }
  .circleDec{
    // content: '\E905';
    border-radius: 50%;
    border: 1px solid rgba(2,182,253,1);
    color: rgba(2,182,253,1);
  }
  .circleAdd{
    border-radius: 50%;
    border: 1px solid rgba(2,182,253,1);
    background-color: rgba(2,182,253,1);
    color: white;
  }
  
}
</style>