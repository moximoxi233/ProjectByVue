<template>
<div class="header">
    <div class="content-wrapper">
        <div class="bgimg"></div>
        <div class="content">
            <!-- 门店信息 -->
            <div class="avatar">
                <!-- 门店基本信息-->
                <div class="shop">
                    <!-- 店名 -->
                    <span class="name">爆辣·铁板烧·川味(学府路店)</span>
                    <!-- 配送信息描述：评分/配送信息/销量/是否自取 -->
                    <div class="description">
                        <span class="score">4.6分</span>&nbsp;
                        <span class="send_text">商家配送 约35分钟</span>
                    </div>
                </div>
                <!-- 头像 -->
                <div class="headimg"></div>
            </div>          
            <!-- 公告 -->
            <p class="bulletin_text">公告：售后服务电话92891987747</p>

            <!-- 优惠信息 -->
            <div class="quan">
                    <span class="discount_text">¥3 兑</span>
                    <span class="discount_text">¥2.5 兑</span>
                    <span class="discount_text">¥3 兑</span>
                    <span class="discount_text">¥3 兑</span>
            </div>
            <div class="discount">
                <!-- 优惠描述 -->
                <div class="discount_desc">
                    <!-- 优惠券图标占位 -->
                    <span class="discount_detail">68减20</span>
                    <span class="discount_detail">68减20</span>
                    <span class="discount_detail">68减20</span>
                    <span class="discount_detail">68减20</span>
                </div>
                <!--  所有优惠信息个数-->
                <div class="discount_count">
                    <span class="discount_nums" @click="changeShow">2个优惠</span>
                    <!-- 下拉箭头图标占位 -->
                </div>
            </div>
        </div>
    </div>
    <!-- 优惠详情 -->
        <transition name="fade">
            <!-- 优惠详情 从屏幕下方渐入 -->
            <div class="detail" v-if="show">
                <div class="detail-wrapper">
                    <!-- 主要（包含）的优惠 -->
                    <div class="detail_type">
                        <h3>红包优惠</h3>
                    </div>
                    <div class="detail-close" @click="changeShow">
                        <!-- 关闭弹窗框图标占位 -->
                        <!-- <i class="icon-close" @click="hideDetail()"></i> -->
                    </div>
                    <div class="foodie_card">
                        <!-- 吃货卡 -->
                        <h4>吃货卡专享</h4>
                        <!-- 吃货卡专署红包 -->
                        <ul>
                            <li>
                                <div class="coupon">
                                    <span>¥</span>7.5
                                </div>
                                <!-- 兑换信息 -->
                                <div class="coupon_desc">
                                    <h3>店铺红包</h3>
                                    <span>无门槛，2022.12.05 到期</span>
                                </div>
                                <div class="exchange">
                                    <div>
                                        <span class="m_detail">¥5</span>
                                        <span class="type">超级吃货红包</span>
                                    </div>
                                    <div>
                                        <button class="exchange_btn">兑换</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="coupon">
                                    <span>¥</span>7.5
                                </div>
                                <!-- 兑换信息 -->
                                <div class="coupon_desc">
                                    <h3>店铺红包</h3>
                                    <span>无门槛，2022.12.05 到期</span>
                                </div>
                                <div class="exchange">
                                    <div>
                                        <span class="m_detail">¥5</span>
                                        <span class="type">超级吃货红包</span>
                                    </div>
                                    <div>
                                        <button class="exchange_btn">兑换</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="coupon">
                                    <span>¥</span>7.5
                                </div>
                                <!-- 兑换信息 -->
                                <div class="coupon_desc">
                                    <h3>店铺红包</h3>
                                    <span>无门槛，2022.12.05 到期</span>
                                </div>
                                <div class="exchange">
                                    <div>
                                        <span class="m_detail">¥5</span>
                                        <span class="type">超级吃货红包</span>
                                    </div>
                                    <div>
                                        <button class="exchange_btn">兑换</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- 其他优惠 -->
                    <div class="discount_others">
                        <h4>优惠</h4>
                        <p class="others_desc">
                            <!-- 优惠类型占位符 -->
                        <span class="type">满减</span>满28元减10元，满28元减10元
                        </p>
                        <p class="others_desc">
                            <!-- 优惠类型占位符 -->
                        <span class="type">配送</span>配送费立减7元
                        </p>
                        <p class="others_desc">
                            <!-- 优惠类型占位符 -->
                        <span class="type">特价</span>特价商品0.9元起
                        </p>
                    </div>

                </div>
            </div>
        </transition>


</div>
    
</template>

<script>
import {ref} from 'vue'
export default{
    name:'Header',
    setup(){
        // 优惠详情是否展开
        let show=ref(false)
        function changeShow(){
            show.value=!show.value
            console.log(show.value,"店上了")
        }
        return{
           show ,changeShow
        }
    }

}
</script>


<style lang="scss" scoped>
.header{
    position: relative;
    .content-wrapper{
        .bgimg{
            height: 220px;
            background-image: url('https://img0.baidu.com/it/u=264705065,3981842899&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665507600&t=3399a95828c0790fb2d3099a11520f82');
            background-size: cover;
            background-color: rgb(173, 204, 194);
        }
        .content{
            position: relative;
            top: -20px;
            width: 85%;
            margin: auto;
            border-radius: 10px;
            background-color: rgb(255, 255, 255);
            box-shadow: #666;
            padding: 24px 12px 18px 24px;
            // background-color: white;
            letter-spacing: 1px;
            .avatar{
                display: flex;
                justify-content: space-between;
                .headimg{
                    border-radius: 6px;
                    background-color: aqua;
                    width: 40px;
                    height: 40px;
                    background-image: url("https://img2.baidu.com/it/u=2396348885,2060741172&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665507600&t=806bfce4ff07147ee4dc37e5a8970e7c");
                    background-size: cover;
                }
                .shop{
                    .name{
                        font-weight: 800;
                        font-size: 18px;
                    }
                    .description{
                        margin-top: 2px;
                        font-size: 14px;
                        .score{
                        color: orange;
                        font-weight: 800;
                        }
                        .send_text{
                            color: rgb(71, 71, 71);
                            font-size: 13px;
                        }
                    }
                }
        }
        .bulletin_text{
            margin: 6px 0;
            font-size: 11px;
            letter-spacing: 2px;
            color: rgb(156, 155, 155);
        }
        .discount_text{
            display: inline-block;
            background-color: rgb(248, 99, 65);
            padding: 2px 6px;
            color: white;
            font-size: 14px;
            border-radius: 4px;
            margin-right: 4px;
        }
        .discount{
            margin-top: 6px;
            display: flex;
            justify-content: space-between;
            .discount_desc{
                    .discount_detail{
                        display: inline-block;
                        padding: 1px 2px;
                        border: 1px solid rgb(249, 77, 77);
                        color: red;
                        font-size: 6px;
                        border-radius: 4px;
                        margin-right: 4px;
                    }
            }
            .discount_count{
                .discount_nums{
                    font-size: 12px;
                    color: #666;
                }

            }
            
        }

        }
        
        

    }
    .detail{
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 86%;
        box-sizing: border-box;
        border-radius: 20px 20px 0 0;
        background-color: antiquewhite;
        padding: 0 10px;
        .detail_type{
            text-align: center;
        }
        .detail-close{
            width: 24px;
            height: 24px;
            background-color: black;
            position: absolute;
            top: 16px;
            right: 16px;
        }
        .foodie_card{
            margin-top: 10px;
            li{
                display: flex;
                width: 100%;
                box-sizing: border-box;
                height: 80px;
                align-items: center;
                padding-left: 30px;
                padding-right: 10px;
                margin-bottom: 8px;
                background-color: rgb(246, 210, 133);
                border-radius: 10px;
                justify-content: space-between;
                .coupon{
                // margin: 2px auto;
                font-size: 38px;
                font-weight: 800;
                letter-spacing: -1px;
                color: rgb(115, 85, 47);
                span{
                    font-size: 16px;
                }
            }
            .coupon_desc{
                h3{
                    margin: 2px 0;
                }
                span{
                    color: rgb(173, 133, 72);
                    font-size: 8px;

                }
            }
            .exchange{
                text-align: center;
                font-size: 12px;
                .m_detail{
                    color: rgb(198, 79, 79);
                }
                .type{
                    font-size: 8px;
                    color: rgb(173, 133, 72);
                }
                .exchange_btn{
                    margin-top: 6px;
                    width: 90px;
                    height: 30px;
                    background-color: rgb(193, 151, 96);
                    border-radius: 30px;
                    box-shadow: none;
                    color: white;
                    border: none;
                    letter-spacing: 2px;
                }
            }
            }
        }
        .discount_others{
            .others_desc{
                font-size: 13px;
                color: rgb(119, 119, 119);
                .type{
                    display: inline-block;
                    width: 30px;
                    height: 18px;
                    border-radius: 6px;
                    margin-right: 10px;
                    border: 1px solid rgb(247, 81, 81);
                    color: rgb(252, 52, 52);
                    // background-color: white;
                    text-align: center;
                    font-size: 12px;
                    line-height: 18px;

                }

            }

        }

    }



}

</style>