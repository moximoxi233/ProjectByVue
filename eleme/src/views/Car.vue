<template>
<div class="carshop">
    <div class="carBox">
        <!-- 点餐详情 -->
        <div class="order">
            <div class="carLogo" @click="show">
                <el-icon><ElemeFilled style="color:rgba(2,182,253,1)"/></el-icon>
            </div>
            <div class="orderDetail">
                <p class="price">
                    <span class="new">33</span>&nbsp;
                    <span class="old">44</span>
                </p>
                <p class="sum">
                    <span class="amount">预估券后￥27</span>&nbsp;
                    <span class="send">配送费￥2.5</span>
                </p>
            </div>
        </div>
        <!-- 结算按钮 -->
        <div class="settlement">去结算</div>
    </div>
    
</div>
</template>
<script>
import {mapActions, mapMutations, useStore} from 'vuex'

export default{
    name:'Car',
    
    setup(){
        let store=useStore();
        // ...mapMutations(['toggleShowOrder']);
        let show=()=>{
            let flag=!store.state.showOrder
            store.commit('toggleShowOrder',flag);
        }
        return {
            show,
        }

    }
}
</script>
<style lang='scss' scope>
.carshop{
    width: 100%;
    .discount{
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        padding: 6px 0;
        font-size: 14px;
        color: #333;
        letter-spacing: 2px;
        margin: 0;
        background-color: #fffae9;
    }
    //购物车模型
    .carBox{
        display: flex;
        align-items: center;
        padding: 0 20px;
        justify-content: space-between;
        height: 83px;
        background-color: white;
        .order{
            display: flex;
            align-items: center;
            .carLogo{
                width: 50px;
                height: 50px;
                // background-color: #00ffff;
                margin-right: 10px;
            }
            .orderDetail{
                .price{
                    margin: 1px 0px;
                    font-size: 14px;
                    .new{
                        font-weight: 600;
                    }
                    .new::before{
                        content: "￥";
                        font-size: 10px;
                    }
                    .old::before{
                        content: "￥";
                        font-size: 10px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        color: #666;
                    }
                }
                .sum{
                    margin: 1px 0px;
                    font-size: 12px;
                    .amount{
                        color:red
                    }
                    .send{
                        font-size: 12px;
                        color: #666;
                    }
                }

            }
        }
        .settlement{
            background-color: rgb(2 182 253);
            width: 100px;
            height: 40px;
            border-radius: 30px;
            color: white;
            line-height: 40px;
            font-weight: 800;
            letter-spacing: 2px;
            text-align: center;
        }
    }

}
</style>