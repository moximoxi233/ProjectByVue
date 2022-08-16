<template>
<div id="detail">
    <headerBar class="detail_header">
        <div slot="detail-header">
            头条详情
            <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" @click.native="goBack"></Icon>
            <Icon type="ios-share-alt" size="28" color="#000" class="fr share" @click.native="showSharebox"/>
        </div>
    </headerBar>
<div class="container">
    <h2 class="detail_title">标题标题标题标题</h2>
    <div class="media_name">
        <img src="" alt="">
        <span class="name">zoe用户名</span>
        <span class="date">2011</span>
    </div>
    <div class="contentNews">
        描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
        <img src="" alt="">
    </div>
    <div class="keywords">
        <span>娱乐</span>
    </div>
    <div class="zan">
        <Button class="btnitems"><Icon type="md-heart" size="26" color="#000"/>&nbsp;33</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button class="btnitems"><Icon type="ios-sad-outline" size="26" color="#000"/>&nbsp;不喜欢</Button>

    </div>
</div>
<comment></comment>
<shareBox></shareBox>
</div>


</template>

<script>
import headerBar from '../components/Header-bar.vue'
import shareBox from '../components/Share.vue'
import comment from '../components/Comment.vue';
import * as type from '../store/mutation-types.js'
import {mapActions,mapGetters} from 'vuex'
export default{
    components:{
        headerBar,
        shareBox,
        comment
    },
    data(){
       return {
            // media_info:this.$router.params.media_info,
            // title:this.$router.params.title
       }
    }
}
</script>

<style lang='less'>
@import '../assets/css/border.less';
#detail{
    .detail_header{
        background: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 600;
        color: black;
        text-align: center;
        .borderBottom(1px,#ccc);
        .back{
            line-height: 1.2rem;
            margin-left: 0.3rem;
        }
        .share{
            line-height: 1.2rem;
            margin-right: 0.3rem;

        }
    }
    .container{
        margin: 1.6rem auto 1.5rem;
        width: 94%;
        .detail_title{
            color: #000;
            font-size: 20px;
        }
        .media_name{
            position: relative;
            img{
                width: 40px;
                height: 40px;
                border-radius: 40px;
                background: #678;
            }
            span{
                display: inline-block;
            }
            .name{
                font-size: 0.5rem;
                font-weight: 400;
                color: #000;
                position: absolute;
                margin-left: 0.2rem;
            }
            .date{
                position: absolute;
                margin-top: 0.7rem;
                margin-left: 0.2rem;
            }
        }
        .contentNews{
            margin-top: 0.5rem;
            font-size: 18px;
            color: #000;
            text-indent:0.7rem ;
            line-height: 0.7rem;
            img{
                text-align: center;
                width: 80%;
                display: block;
                margin: 0.2rem auto;
                background: #678;

            }

        }
        .keywords{
            span{
                display: inline-block;
                border-radius: 10px;
                padding: 1px 10px;
                border: 1px #666 solid;
            }
        }
        .zan{
            margin-top: 0.5rem;
            text-align: center;
            .btnitems{
                font-size: 16px;
                border-radius: 20px;
                
            }
            
        }
    }
}
</style>