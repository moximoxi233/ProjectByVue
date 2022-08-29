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
    <h2 class="detail_title">{{$route.params.title}}</h2>
    <div class="media_name">
        <img src="../assets/imgs/head.jpg" alt="">
        <span class="name">{{media_name}}</span>
        <span class="date">{{datetime}}</span>
    </div>
    <div class="contentNews">
        {{abstract}}
        <!-- image_list -->
        <img :src="img.url" alt="" v-for="(img,index) in image_list" :key="index">
    </div>
    <div class="keywords">
        <span v-for="(keyword,index) in keywords" :key="index">{{keyword}}</span>
    </div>
    <div class="zan">
        <Button class="btnitems"><Icon type="md-heart" size="26" color="#000"/>&nbsp;{{repin_count}}</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button class="btnitems"><Icon type="ios-sad-outline" size="26" color="#000"/>&nbsp;不喜欢</Button>

    </div>
</div>
<comment :comment="comment_count"></comment>
<shareBox :show="Sharebox"></shareBox>
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
            media_info:this.$route.params.media_info,
            title:this.$route.params.title
       }
    },
    methods:{
        goBack:function(){
            this.$store.commit(type.ROUTERCHANGE,!this.routerChange)
            this.$router.go(-1)
        },
        showSharebox:function(){
            this.$store.commit(type.SHOWSHAREBOX,!this.Sharebox)
        }

    },
    computed:{
        ...mapGetters([
            'oneDetail',
            'Sharebox',
            'routerChange'
        ]),
        media_name:function(){
            if(this.$route.params.media_name){
                return this.$route.params.media_name
            }else{
                return ''
            }
        },
        datetime:function(){
            if(this.$route.params.datetime){
                return this.$route.params.datetime
            }else{
                return ''
            }
        },
        abstract:function(){
            if(this.$route.params.abstract){
                return this.$route.params.abstract
            }else{
                return ''
            }
        },
        image_list:function(){
            if(this.$route.params.image_list){
                return this.$route.params.image_list
            }else{
                return ''
            }
        },
        keywords:function(){
            if(this.$route.params.keywords){
                return this.$route.params.keywords
            }else{
                return ''
            }
        },
        repin_count:function(){
            if(this.$route.params.repin_count){
                return this.$route.params.repin_count
            }else{
                return ''
            }
        },
        comment_count:function(){
            if(this.$route.params.comment_count){
                return this.$route.params.comment_count
            }else{
                return ''
            }
        },

    },
    watch:{
        '$route':function(){
            this.$store.commit(type.SHOWSHAREBOX,false)
        }
    },
    mounted(){
       setTimeout(() => {

      console.log(this.$route);

    }, 1000);
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
            margin-top: 6px;
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
                font-size: 0.4rem;
                font-weight: 600;
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