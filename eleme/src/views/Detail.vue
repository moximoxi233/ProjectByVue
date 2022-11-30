<template>
<div class="food_detail">
    <h1>{{food.name}}</h1>
</div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'

import { useRoute } from 'vue-router'
export default{
    name:'Detail',
    props:{
        // 要指明数据类型 不然报错
        food:Object
    },
    setup(props){
        let food=props.food
        onMounted(()=>{
            console.log("当前点击的食物",props.food)
        })
    }
}
</script>
<style lang="less" scope>

</style>