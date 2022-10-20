<template>
<div class="carshop">
    <p class="discount">满x元减x元，还差x元 去凑单</p>
    <div class="carBox">
        <!-- 点餐详情 -->
        <div class="order">
            <div class="carLogo">
                <el-icon><PlatformEleme style="width:60px;height:60px:color:#02b6fd"/></el-icon>
                <!-- <i class="logo el-icon-platform-eleme"></i> -->
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
export default{
    name:'Car',
    setup(){

    }
}
</script>
<style lang='scss' scope>
.carshop{
    width: 100%;
    .discount{
        width: 100%;
        height: 30px;
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
        background-color: #fffae9;
        .order{
            display: flex;
            align-items: center;
            .carLogo{
                width: 60px;
                height: 60px;
                background-color: aqua;
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