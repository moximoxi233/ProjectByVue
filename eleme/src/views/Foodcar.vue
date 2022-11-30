<template>
<div class="blackBG" v-if="toggleShowOrder">
    <div class="foodcar" >
    
    <p class="describe">
        满25减2元，还差x元

    </p>
    <div class="info">
        <p>已选商品</p>
        <el-icon><Delete style="width:16px;height:16px;color:#666"/>
        <span class="delete" @click="clearFoods">清空</span>
        </el-icon>
    </div>
    <ul>
        <li class="foodDetail" v-for="(item,index) in selectedFoods" :key="index">
            <div class="food">
                <div class="foodimg"><img :src="item.image" alt=""></div>
                <div class="fooddescribe">
                    <p class="foodName">{{item.name}}</p>
                    <p class="foodPrice">{{item.description}}</p>
                    <!-- <span>{{item.count}}</span> -->
                </div>
            </div>
            <div class="carcotr">
                <Carcontrol :food="item" />
            </div>
        </li>
        
    </ul>
    </div>
</div>
</template>
<script>
import { ref, watch,onMounted, computed } from '@vue/runtime-core'
import {mapActions, useStore} from 'vuex'
import Carcontrol from './Carcontrol.vue'

export default{
    name:'Foodcar',
    components:{
        Carcontrol,
    },
    setup(){
        let store=useStore()
        let toggleShowOrder=ref(false)
        let selectedFoods=ref([])
        watch(()=>{
            // selectedFoods.value=store.state.selectedFoods
            selectedFoods.value=store.state.selectedFoods
            toggleShowOrder.value=selectedFoods.value.length&&store.state.showOrder

        })
        // store.state.showOrder
        // console.log('toggleShowOrder',toggleShowOrder.value)
        let clearFoods=()=>{
            store.dispatch('clearFood')
        }
        onMounted(()=>{
        })
        return{
            toggleShowOrder,
            selectedFoods,
            clearFoods
        }
    }
}
</script>
<style lang='scss' scope>
.blackBG{

    width: 100%;
    z-index: 1000;
    height: 80vh;
    background-color: rgba($color: #000000, $alpha: 0.5);
    .foodcar{
    width: 100%;
    // height: 60vh;
    position: fixed;
    bottom: 40px;
    padding-bottom: 100px;
    background-color: #fff;
    border-radius: 30px 30px 0 0;
    overflow: hidden;
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
        padding: 0px 12px;
        margin-top: 12px;
        display: flex;
        justify-content: space-between;
        color: #666;
        // align-content: center;
        p{
            font-size: 14px;
            color: black;
            font-weight: 600;
            margin: 0;
        }
        .delete{
            color: #666;
            font-size: 14px;
            // size:4px
            // width: 16px;
            // height: 16px;
            // padding: 2px;
        }
    }
    .foodDetail{
        display: flex;
        padding: 0 12px;
        margin: 10px 0;
        justify-content: space-between;
        .food{
            display: flex;
            .foodimg{
                // width: 60px;
                // height: 60px;
                // background-color: antiquewhite;
                border-radius: 10px;
                margin-right: 10px;
                // overflow: hidden;
                img{
                    background-repeat: no-repeat;
                    width: 60px;
                    border-radius: 10px;
                    height:60px;
                    object-fit: cover;
                }
            }
            .fooddescribe{
                .foodName{
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;

                }
                .foodPrice{
                    margin: 0;
                    font-size: 14px;
                    color: #666;
                }
            }
        }
        .carcotr{
            margin: auto 0px;
        }


    }
    
}

}

</style>