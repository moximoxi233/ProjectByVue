<template>
    <!-- 商品列表&详情 -->
    <div class="goods">
        <!-- 菜单栏（左） -->
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li class="" v-for="(item,index) in goods" :key=index>
                    <span class="text">{{item.name}}</span>
                </li>
                <li class="menu-item-selected">
                    <span class="text">超值套餐</span>
                </li>
                <li class="">
                    <span class="text">组合套餐组合套餐组合套餐</span>
                </li>
            </ul>

        </div>
        <!-- 菜品列表（右） -->
        <div class="foods-wrapper">
            <ul>
                <li class="food-type" v-for="(item,index) in goods" :key=index>
                    <!-- 菜品类型 -->
                    <h1>{{item.name}}</h1>
                    <!-- 菜品列表 -->
                    <ul>
                        <li class="food-item" v-for="(item_foods,x) in goods[index].foods" :key=x>
                            <!-- 食物照片 -->
                            <div class="food_img">
                                <img :src="item_foods.image" alt="">
                            </div>
                            <!-- 食物内容 -->
                            <div class="food_content">
                                <h2 class="food_name">{{item_foods.name}}</h2>
                                <p class="description" v-show="true">{{item_foods.description}}</p>
                                <div class="sell_info">
                                    <span class="sellCount">月销量&nbsp;{{item_foods.sellCount}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span class="rating">好评率&nbsp;{{item_foods.rating}}</span>
                                </div>
                                <div class="discount">
                                    <span class="highlight">9.9折</span>
                                    <span class="normal">单点不送</span>
                                </div>
                                 <div class="price">
                                    <div>
                                        <span class="unit">¥</span>
                                        <span class="newPrice">{{item_foods.price}}</span>
                                        <span class="oldPrice">¥30</span>
                                    </div>
                                                                     <!-- 购物车管理 -->
                                    <div class="cartcontrol-wrapper">
                                        <Carcontrol />
                                    </div>
                                 </div>

                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        
    </div>
    <!-- 购物车 组件 -->
    <Car class="car"/>
    <!-- 购物车详情 组件 -->
</template>
<script>
import BScroll from 'better-scroll'
import {nextTick, ref} from 'vue'
import axios from 'axios'
import Carcontrol from './Carcontrol.vue'
import Car from './Car.vue'
//✅图标：在入口文件已配置｜购物车｜购物车控制｜食物详情
import { reactive, onUnmounted, onUpdated, onMounted, toRefs } from 'vue'; 
export default{
    name:'Goods',
    components:{
    Carcontrol,
    Car
    },
    setup(){

        let goods=ref([]);//菜品数据
        let listHeight=ref([]);//列表高度（序列）数组
        let foodsScrollY=ref(0);//
        let selectedFood=ref('')//已选择食物
        //数据请求 数据来源 public/static/data.json
        let getData=()=>{
            axios.get('./data.json').then(res=>{
                // console.log(goods.value)
                goods.value=res.data.goods
                // console.log(goods.value)
            })

        }
        // nextTick(()=>{
        // console.log(goods,'请求数据')
        // })
        onMounted(()=>{
        getData()
        console.log(goods)

        })
        return {goods,listHeight,foodsScrollY,selectedFood}

        
    },

}
</script>
<style lang="scss" scope>
.goods{
    display: flex;
    box-sizing: border-box;
    .menu-wrapper{
        width: 22%;
        min-height: 400px;
        background-color: rgb(247, 247, 247);
        color: rgb(103, 103, 103);
        text-align: center;
        li{
            font-size: 14px;
            line-height: 18px;
            padding-left: 3%;
            padding: 16px 10px;
            background-color: rgb(230, 230, 230);

        }
        li.menu-item-selected+li{
            border-top-right-radius: 10px;
        }

        .menu-item-selected{
            background-color: rgb(247, 247, 247);
            .text{
                color: black;
                font-weight: 600px;
            }
        }
    }
    //右菜单
    .foods-wrapper{
        width: 80%;
       padding: 0 3%; 
       .food-type{
        h1{
            font-size: 16px;
            font-weight: 600;
            line-height: 16px;
            margin: 16px 0px;
        }
        .food-item{
            display: flex;
            flex-direction: row;
            margin-bottom: 6px;
            .food_img{
                img{
                    width: 100px;
                    border-radius: 10px;
                    height:100px
                }
            }
            .food_content{
                box-sizing: border-box;
                padding: 0 3%;
                .food_name{
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 0px;
                }
                .sell_info,.description{
                    white-space: nowrap;
                    width: 180px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 12px;
                    color: #999;
                    margin: 4px 0px;
                    line-height: 16px;
                }
                .discount{
                    margin: 2px 0px;
                    
                    span{
                        font-size: .1px;
                        color: rgb(255, 75, 51);
                        display: inline-block;
                        border-radius: 4px;
                        padding: 1px 3px;
                        border: .4px rgb(242, 85, 65) solid;
                        margin-right: 4px;
                    }
                }
                .price{
                    display: flex;
                    justify-content: space-between;
                    margin: 8px 0;
                    .unit{
                        font-size: 4px;
                        font-weight: 400;
                        color: rgb(255, 75, 51);

                    }
                    .newPrice{
                        font-size: 18px;
                        font-weight: 600;
                        color: rgb(255, 75, 51);
                        margin-right: 4px;
                        
                    }
                    .oldPrice{
                        font-size: .1px;
                        color: #999;
                        text-decoration: line-through;
                    }
                }
            }
        }
       }
    }
}
.car{
    position: fixed;
    bottom: 0;
    z-index: 800;
    // height: 80px;
}
</style>