<template>
<div class="carshop">
    <p class="discount">满x元减x元，还差x元 去凑单</p>
    
</div>
</template>
<script>
export default{
    name:'Car',
    setup(){

    }
}
</script>
<style lang='scss' scope>
.carshop{
    width: 100%;
    .discount{
        width: 100%;
        height: 30px;
        text-align: center;
        padding: 6px 0;
        font-size: 14px;
        color: #333;
        letter-spacing: 2px;
        background-color: #fffae9
    }

}
</style>