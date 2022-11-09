<template>
<div class="foodcar">
    
    <p class="describe">
        满25减2元，还差x元

    </p>
    <div class="info">
        <p>已选商品</p>
        <el-icon><Delete class="delete"/>清空</el-icon>
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
import { ref, watch } from '@vue/runtime-core'
import {mapActions, useStore} from 'vuex'

export default{
    name:'Foodcar',
    setup(){
        let store=useStore()
        let toggleShowOrder=ref(false)
        watch(()=>{
            toggleShowOrder.value=store.state.showOrder
        })
        store.state.showOrder
        console.log('toggleShowOrder',toggleShowOrder.value)
        return{
            toggleShowOrder
        }
    }
}
</script>
<style lang='scss' scope>
.foodcar{
    width: 100%;
    // height: 60vh;
    position: fixed;
    bottom: 40px;
    padding-bottom: 100px;
    background-color: cadetblue;
    border-radius: 30px 30px 0 0;
    .describe{
        text-align: center;
        background-color: #fff6de;
        color: #333;
        padding: 12px 0;
        margin: 0;
        overflow: hidden;
        font-size: 14px;
    }
    .info{
        font-weight: 500;
        padding: 0 12px;
        display: flex;
        justify-content: space-between;
        .delete{
            color:rgba(2,182,253,1);
            size:4px
        }
    }
    .foodDetail{
        padding: 0 12px;


    }
    
}
</style>