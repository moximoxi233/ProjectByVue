<template>
<div class="foodcar" v-if="false">
    <p class="describe">满25减2元，还差x
        3元
    </p>
    <div class="info">
        <p>已选商品</p>
        <el-icon><Delete />清空</el-icon>
    </div>
    <ul>
        <li class="foodDetail">
            <div class="foodimg"></div>
            <div class="fooddescribe">
                <p class="foodName"></p>
                <p class="foodPrice"></p>
            </div>
        </li>
        
    </ul>
</div>
</template>
<script>
export default{
    name:'Foodcar',
    setup(){


    }
}
</script>
<style lang='scss' scope>
.foodcar{
    width: 100%;
    height: 100vh;
}
</style>