<template>
<div class="wrapper" ref="wrapper">
    <div class="food_detail">
    <img :src="food.image" alt="" class="product_img">
    <div class="food_msg">
        <p>{{food.name}}</p>
        <span class="sell_count">月售 {{food.sellCount}}</span>
        <p class="food_price">{{food.price}}</p>
        <div class="cartcontrol">
            <Carcontrol :food="food" />
        </div>
    </div>
    <div class="others">
        <a href="" class="deatil">详情</a>
        <a href="" class="deatil">评价</a>
        <a href="" class="deatil">建议</a>
        <div id="detail" class="common">
            <p class="title">商品详情</p>
            <p class="info"><span>商品描述&nbsp;&nbsp;</span>{{food.info}}</p>
        </div>
        <div class="ratings common">
            <div class="ratings_title">
                <p class="title">商品评价</p>
                <span class="more">查看全部评价 ></span>
            </div>
            <div class="desc">
                <ul>
                    <li>全部 {{food.rating}}</li>
                </ul>
            </div>
            <div class="ratings_detail" v-for="(item,index) in food.ratings" :key='index'>
                <div class="user">
                    <div class="users_head">
                        <img src="item.image" alt="">
                    </div>
                    <div class="user_info">
                        <div class="users_name">{{item.username}}</div>
                        <div class="pub_time">{{item.rateTime}}</div>
                    </div>
                </div>
                <p>{{item.text==''? "用户赞了该商品":''}}</p>
            </div>
        </div>
        <div id="advice" class="common">
            建议
        </div>
    </div>
</div>
<el-icon><ArrowLeftBold @click="hideDetail(food)" class="back"  ref='back'/></el-icon>

</div>
</template>
<script>
import BScroll from 'better-scroll'
import {ref} from 'vue'

import { computed, onMounted, watch } from '@vue/runtime-core'
import Carcontrol from './Carcontrol.vue'
import {mapActions, useStore} from 'vuex'
import { useRoute } from 'vue-router'
export default{
    name:'Detail',
    props:{
        // 要指明数据类型 不然报错
        food:Object
    },
    components:{
        Carcontrol,
    },
    setup(props){
        let store=useStore()
        let food=props.food
        let wrapper=ref(null)
        
        let hideDetail=(food)=>{
            store.commit('toggleFoodDetail',false)
            console.log(store.state.showDetail)
            
        }
        onMounted(()=>{
            console.log('hhh')
            // console.log("当前点击的食物",props.food)
            let page=new BScroll(wrapper.value,{
                    scrollY: true,
                    probeType:3,
                    disableTouch:false,
                    disableMouse:false,
                    click:true
                })
            // page.on('scroll',pos=>{
            //     // console.log(' 滚动了',window.getComputedStyle())
            //     // scrollY=Math.abs(Math.round(pos.y))
            //     // topHeight.value=Math.abs(back.value.$el.getBoundingClientRect().top)
            //     console.log(back.value.$el.getBoundingClientRect().top)
            //     console.log(topHeight.value)
            // })
        })
        return {
            hideDetail,
            wrapper,
        }
    }
}
</script>
<style lang="scss" scope>
 .back{
    position: absolute;
    top: 20px;
    left: 10px;
    width:20px;
    height:20px;
    // z-index: 100;
    text-shadow: #111;
    color:rgb(74, 74, 74);
    // border: #666 1px solid;
}
.wrapper{
    height: 770px;
    overflow: hidden;
    .food_detail{
    width: 100%;
    position: relative;
    background-color: rgb(234, 234, 234);
       
    img{
        width: 100%;
    }
    .food_msg{
        position: relative;
        width: 96%;
        margin: 8px auto;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        box-sizing: border-box;
        p{
            font-size: 20px;
            font-weight: 400;
        }
        .sell_count{
            color: #666;
            font-size: 14px;
        }
        .food_price{
            font-size: 22px;
            font-weight: 500;
            color: rgb(249, 77, 77);
        }
        .cartcontrol{
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
    }
    .others{
        width: 96%;
        margin: 10px auto;
        // padding: 10px;
        // background-color: white;
        // border-radius: 10px;
        a{
            font-size: 16px;
            font-weight: 450;
            padding-right: 20px;
        }
        .common{
            width: 96%;
            margin: 10px auto;
            padding: 10px;
            background-color: white;
            border-radius: 10px; 
            .info{
            font-size: 14px;
            color: #444;
            span{
                color: #666;
            }
        }
        }
        
        .title{
            font-weight: 300;
            margin: 4px 0px;
            font-weight: 500;
            color: #111;
            font-size: 18px;
        }
        // 评价部分
        .ratings{
            .ratings_title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 6px;
                .title{
                    font-weight: 300;
                    margin: 4px 0px;
                    font-weight: 500;
                    color: #111;
                    font-size: 18px;
                }
                .more{
                    font-size: 14px;
                    color: #666;

                }
            }
            .desc{
                ul{
                    position: relative;
                        li{
                            border-radius: 4px;
                            padding: 4px 10px;
                            background-color: rgb(192, 228, 252);
                            color: rgb(71, 175, 250);
                            font-size: 14px;
                            display: inline-block;
                    }
                }
            }
        }
        
    }

}
}
p{
    margin: 0;
    padding: 0;
}


</style>