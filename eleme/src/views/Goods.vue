<template>
    <div class="goods">
        <!-- 菜单栏（左） -->
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li class="">
                    <span class="text">组合套餐组合套餐组合套餐</span>
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
                <li class="food-type">
                    <!-- 菜品类型 -->
                    <h1>超值套餐</h1>
                    <!-- 菜品列表 -->
                    <ul>
                        <li class="food-item">
                            <!-- 食物照片 -->
                            <div class="food_img">
                                <img src="" alt="">
                            </div>
                            <!-- 食物内容 -->
                            <div class="food_content">
                                <h2 class="food_name">皮蛋瘦肉粥</h2>
                                <p class="description" v-show="true">原料：大米、皮蛋、猪瘦肉</p>
                                 <div class="sell_info">
                                    <span class="sellCount">月销量</span>
                                    <span class="rating">好评率</span>
                                 </div>
                                 <div class="price">
                                    <span class="newPrice">
                                        <span class="unit">¥</span>
                                        20
                                    </span>
                                    <span class="oldPrice">¥30</span>
                                 </div>
                                 <!-- 购物车管理 -->
                                 <div class="cartcontrol-wrapper">
                                    🛒组件
                                 </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 购物车 组件 -->
        <!-- 购物车详情 组件 -->
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {ref} from 'vue'
import axios from 'axios'
//✅图标：在入口文件已配置｜购物车｜购物车控制｜食物详情

export default{
    name:'Goods',
    setup(){
        //数据请求 public/static/data.json
    }
}
</script>
<style lang="scss" scope>
.goods{
    display: flex;
    // flex-direction: row;
    .menu-wrapper{
        width: 22%;
        min-height: 400px;
        background-color: rgb(247, 247, 247);

        color: rgb(103, 103, 103);
        text-align: center;
        li{
            // height: 30px;
            font-size: 14px;
            line-height: 18px;
            padding-left: 3%;
            padding: 10px 10px;
            background-color: rgb(230, 230, 230);

        }
        li.menu-item-selected+li{
            border-top-right-radius: 10px;
        }

        .menu-item-selected{
            background-color: rgb(247, 247, 247);
            // background-color: white;
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
            font-weight: 800;
            line-height: 14px;
        }
        .food-item{
            display: flex;
            flex-direction: row;
            .food_img{
                width: 100px;
                height:100px;
                background-color: antiquewhite;
                border-radius: 10px;
                // flex-grow: 1;
            }
            .food_content{
                padding: 0 3%;
                // flex-grow: 1.2;
                .food_name{
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 0px;
                }
                .sell_info,.description{
                    font-size: 12px;
                    color: #999;
                    margin: 0;
                    line-height: 16px;
                }
            }
        }
       }
    }
}
</style>