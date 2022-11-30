<template>
<!-- Carcontrol===购物车控制 -->

    <!-- 添加购物车 -->
    <div class="carControl">
        <!-- 减 -->
        <span class="dec circleDec" @click="decreaseCart" v-show="count">-</span>
        <!-- 加购数量 -->
        <span class="count" v-show="count">{{count}}</span>
        <!-- 加 -->
        <span class="add circleAdd" @click="addCar">+</span>
    </div>
</template>
<script>
// vue3 中的 setup 在 beforecreate 和 created 前执行，此时 vue对象还未被创建，没有了之前的this，所以此处我们需要用到另一种方法来获取到 store 对象。
import {mapActions, useStore} from 'vuex'
import { reactive, props, onUnmounted,onUpdated, onMounted, toRefs, computed, watch, ref} from 'vue'; 
export default{
    name:'Carcontrol',

    props:{
        // 要指明数据类型 不然报错
        food:Object
    },
    setup(props){
              // 获取store对象
        let store=useStore()
        let count=ref(0);
        count.value=props.food.count
        watch(()=>{
            // count.value=store.state.selectedFoods.length&&props.food.count
            count.value=props.food.count
        })
        // 添加食物到购物车
        let addCar=()=>{
            // if(!food.count){// 如果食物没加入到过购物车
            //     //为该 food 设置一个新字段==count
            // }
            store.commit('addFood',props.food);
            store.dispatch('selectedFood')
            // console.loxg(store.state.selectedFoods)
        }
        // 减少食物到购物车
        let decreaseCart=()=>{
            store.commit('decreaseGood',props.food);
            store.dispatch('selectedFood')
        }
        
        return {
        addCar,
        count,
        decreaseCart
        }
    }
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