<template>
    <!-- 商品列表&详情 -->
    <div class="goods">
        <!-- 菜单栏（左） -->
        <div class="menuWrapper" ref="menuWrapper">
            <ul>
                <li :class="index==menuIndex?'menu-item-selected':''" v-for="(item,index) in goods" :key=index @click="menuClick(index,$event)">
                    <span class="text">{{item.name}}</span>
                </li>
                <!-- <li class="menu-item-selected">
                    <span class="text">超值套餐</span>
                </li> -->
            </ul>

        </div>
        <!-- 菜品列表（右） -->
        <div class="foodsWrapper" ref="foodsWrapper">
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
    <Foodcar class="foodcar"/>
</template>
<script>
import BScroll from 'better-scroll'
import {nextTick, ref} from 'vue'
import axios from 'axios'
import Carcontrol from './Carcontrol.vue'
import Car from './Car.vue'
import Foodcar from './Foodcar.vue'
//✅图标：在入口文件已配置｜购物车｜购物车控制｜食物详情
import { reactive, onUnmounted,onUpdated, onMounted, toRefs, computed, watch} from 'vue'; 
export default{
    name:'Goods',
    components:{
    Carcontrol,
    Car,
    Foodcar
    },
    setup(){

        let goods=ref([]);//菜品数据
        let listHeight=ref([]);// 食物列表高度（序列）数组
        let foodsScrollY=ref(0);// 目前食物列表高度
        let selectedFood=ref('')// 已选择食物
        // 计算「食物列表高度」对应的「菜单下标」===》确定菜单高亮项
        let menuIndex=ref(0)
        let index=watch(foodsScrollY,()=>{
            for(let i=0;i<listHeight.value.length;i++){
                //foodsScrollY 目前食物列表高度
                    if(foodsScrollY>=listHeight[i]&&foodsScrollY<=listHeight[i+1]){
                        // console.log("此时",listHeight,foodsScrollY)
                        // console.log("目前食物列表下标",i)
                        return i
                    }
            }
            return 0
        })
        //数据请求 数据来源 public/static/data.json
        let getData=()=>{
            axios.get('./data.json').then(res=>{
                // console.log(goods.value)
                goods.value=res.data.goods
                nextTick(()=>{
                    // console.log('请求数据',goods.value)
                    // console.log("请求完数据后开始初始化scroll")
                    initScroll()
                    calculateFlistHeight()
                })
            })

        }
        // 初始化菜单栏/商品列表滚动
        let menuWrapper=ref(null)
        let foodsWrapper=ref(null)
        let menu=new BScroll(menuWrapper.value,{
                scrollY: true,
                disableTouch:false,
                disableMouse:false,
                click:true
            })
        let flist=new BScroll(foodsWrapper.value,{
            click:true,
            probeType:3,
            disableTouch:false,
            disableMouse:false,
            })
        let initScroll=()=>{
            // 监听食物列表的滚动事件
            flist.on('scroll',pos=>{
                foodsScrollY=Math.abs(Math.round(pos.y))
                for(let i=0;i<listHeight.value.length;i++){
                    //foodsScrollY 目前食物列表高度
                    if(foodsScrollY>=listHeight.value[i]&&foodsScrollY<=listHeight.value[i+1]){
                        // console.log("目前食物列表下标",i)
                        // return i
                        console.log("此时",listHeight.value[i],foodsScrollY)
                        menuIndex.value=i
                    }
                }
                console.log("menuIndex",menuIndex.value)
                
            })

        }
        // 点击菜单栏 获取食物列表新定位,参数：index（菜单下标）、e（事件捕捉对象）
        let menuClick=(index,e)=>{
            console.log("下标｜事件",index,e)
            console.log(flist)
            flist.scrollTo(0,-listHeight[index])
        }
        // 获取每个食物类型的所在的列表高度
        let calculateFlistHeight=()=>{
            let foodList=foodsWrapper.value.querySelectorAll('.food-type')
            let height=0
            // console.log(listHeight.value)
            listHeight.value.push(height) // 起始高度（0，0）
            for(let i=0;i<foodList.length;i++){
                // 从第1个食物(下标为0～length-1)类型列表开始计算
                let type=foodList[i]
                height+=type.clientHeight
                // console.log('获取每个食物类型的所在的列表高度',height)
                listHeight.value.push(height)
            }
            // console.log(listHeight.value)
        }
        // 计算菜单的下标

        onMounted(()=>{
        getData();
        })
        onUpdated(()=>{
           
        })
       
        return {
            goods,
            listHeight,
            foodsScrollY,
            selectedFood,
            menuWrapper,
            foodsWrapper,
            menuIndex,
            index,
            menuClick,
            flist
            // foodListHeight
            // initScroll
        }

        
    },

}
</script>
<style lang="scss" scope>
.goods{
    display: flex;
    box-sizing: border-box;
    .menuWrapper{
        // position: absolute;
        width: 22%;
        height: 300px;
        // min-height: 200px;
        background-color: rgb(247, 247, 247);
        color: rgb(103, 103, 103);
        text-align: center;
        overflow: hidden;
        ul{
            // height: 800px;
            li{
            font-size: 14px;
            line-height: 18px;
            padding-left: 3%;
            padding: 16px 10px;
            background-color: #f2f2f2;

            }
            // li.menu-item-selected+li{
            //     border-top-right-radius: 10px;
            // }

            .menu-item-selected{
                background-color: rgb(255, 255, 255);
                .text{
                    color: black;
                    font-weight: 600px;
                }
            }
            }
    }
    //右菜单
    .foodsWrapper{
        width: 80%;
        height: 300px;
        padding: 0 3%; 
        overflow: hidden;
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
                    height:100px;
                    object-fit: cover;
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
.foodcar{
    position: fixed;
    bottom: 0;
    z-index: 1000;
}
</style>