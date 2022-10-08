<template>
<div class="header">
    <div class="content-wrapper">
        
        <div class="content">
            <!-- 门店信息 -->
            <div class="avatar">
                <!-- 门店基本信息-->
                <div class="shop">
                    <!-- 店名 -->
                    <h1 class="name">店名店名</h1>
                    <!-- 配送信息描述：评分/配送信息/销量/是否自取 -->
                    <div class="description">
                        <span class="score">4.6分</span>&nbsp;
                        <span class="send_text">商家配送 约35分钟</span>
                    </div>
                </div>
                <!-- 头像 -->
                <img src="" alt="">
            </div>          
            <!-- 公告 -->
            <div class="bulletin_wrapper">
                <span class="bulletin_text">公告：售后服务电话92891987747</span>
                <!-- 信息缩率图标 占位 -->
            </div>
            <!-- 优惠信息 -->
            <div class="discount">
                <!-- 优惠描述 -->
                <div class="discount_desc">
                    <!-- 优惠券图标占位 -->
                    <span class="discount_text"></span>
                </div>
                <!--  所有优惠信息个数-->
                <div class="discount_count">
                    <span class="discount_count">2个</span>
                    <!-- 下拉箭头图标占位 -->
                </div>
            </div>
        </div>
        <div class="background">
            <img src="" alt="">
        </div>
        <transition name="fade">
            <!-- 优惠详情 从屏幕下方渐入 -->
            <div class="detail">
                <div class="detail-wrapper">
                    <!-- 主要（包含）的优惠 -->
                    <div class="detail_type">
                        <h1>红包优惠</h1>
                    </div>
                    <div class="detail-close">
                        <!-- 关闭弹窗框图标占位 -->
                        <!-- <i class="icon-close" @click="hideDetail()"></i> -->
                    </div>
                    <div class="foodie_card">
                        <!-- 吃货卡 -->
                        <h2>吃货卡专享</h2>
                        <!-- 吃货卡专署红包 -->
                        <ul>
                            <li>
                                <div class="coupon">
                                    <span>¥</span>
                                    7.5
                                </div>
                                <!-- 兑换信息 -->
                                <div class="coupon_desc">
                                    <h1>店铺红包</h1>
                                    <span>无门槛，2022.12.05 到期</span>
                                </div>
                                <div class="exchange">
                                    <div>
                                        <span class="detail">¥5</span>
                                        <span class="detail">超级吃货红包</span>
                                    </div>
                                    <div>
                                        <button class="exchange_btn">兑换</button>
                                    </div>
                                </div>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                    <!-- 其他优惠 -->
                    <div class="discount_others">
                        <h2>优惠</h2>
                        <p class="others_desc">
                            <!-- 优惠类型占位符 -->
                            满28元减10元，满28元减10元，满28元减10元，满28元减10元，满28元减10元，满28元减10元
                        </p>
                    </div>

                </div>
            </div>
        </transition>

    </div>
    

</div>
    
</template>

<script>
export default{
    name:'Header',
    props:{
        msg:String
    }

}
</script>


<style lang="scss" scoped>
.header{
    position: relative;
    // background-image: url(https://img2.baidu.com/it/u=2398126773,3303439363&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665421200&t=37389b818349c58b8fa0c74ee23ebd37);
    background: rgba(38, 85, 132, 0.5);
    height: 220px;
    // color: #fff;
    //blur是内置函数用于制作毛玻璃效果，该元素最好不要应用在有内容的父元素中，不然整个容器都会出现毛玻璃效果
    // filter:blur(10px); 
    // overflow: hidden;
    .content-wrapper{
        position: relative;
        top: 90%;
        width: 85%;
        margin: auto;
        border-radius: 10px;
        background-color: antiquewhite;
        padding: 24px 12px 18px 24px;
        .content{
            .avatar{
                display: flex;
                justify-content: space-between;
                img{
                    border-radius: 6px;
                    background-color: aqua;
                    width: 40px;
                    height: 40px;
                }
        }

        }
        
        

    }



}

</style>