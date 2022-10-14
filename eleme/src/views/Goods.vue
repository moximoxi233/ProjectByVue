<template>
    <div class="goods">
        <!-- 菜单栏（左） -->
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li class="menu-item-selected">
                    <span class="text">超值套餐</span>
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
    padding-left: 3%;
    // flex-direction: row;
    .menu-wrapper{
        width: 20%;
        .menu-item-selected{
            background-color: white;
            .tex{
                font-size: 16px;
                font-weight: 600px;
            }
        }
    }
}
</style>