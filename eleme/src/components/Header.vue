<template>
<div class="header">
    <div class="content-wrapper">
        <div class="avatar">
            <!-- 头像 -->
            <img src="" alt="">
        </div>
        <div class="content">
            <!-- 门店名称 -->
            <div class="shop">
                <span class="brand"></span>
                <span class="name"></span>
            </div>
            <!-- 配送信息描述：评分/配送信息/销量/是否自取 -->
            <div class="description">
                <span class="score"></span>
                <span class="send_text"></span>
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


<style>

</style>