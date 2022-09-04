<template>
<div id="selfpage">
    <headerBar>
        <div slot="selfpage">
             <Icon type="ios-arrow-back" size="28" color="#fff" class="fl back" @click.native="$router.go(-1)"></Icon>
            <span class="Myselfpage">我的主页</span>
            <Icon type="ios-share-alt" size="28" color="#fff" class="fr share" @click.native="showShareBox"/>
        </div>
    </headerBar>
    <div class="self-info clearfix">
        <div class="leftInfo">
            <img src="../assets/imgs/head.jpg" alt="" class="fl self_top_head">
            <div class="fl clearfix carefans">
                <p class="username">{{userName}}</p>
                <span class="fl">关注 {{vitality.follow}} &nbsp;&nbsp;&nbsp;&nbsp;</span>
                
                <span class="fl">粉丝 {{vitality.fans}}</span>
                <br>
                <router-link to="/editprofile" class="intro" v-if="!hasIntroduce">
                <Icon type="md-create" size="16" />
                    <!-- <Icon type="edit" size="16" color="blue"></Icon> -->
                    <span>添加个人简介...</span>
                </router-link>
                <p v-else class="fl intro" >简介：{{introduce}}</p>
            </div>
        </div>
        <div class="fr rightEdit">
            <router-link to="/editprofile" class="editInfo">编辑资料</router-link>
        </div>
    </div>
    <div class="clearfix" v-for="(item,index) in selfComment" :key="index">
        <div class="mycomment">
        <img src="../assets/imgs/head.jpg" alt="" class="headerimg fl">
        <div class="rightInfo">
            <p class="uname">{{userName}}</p>
            <p class="commentTime">{{item.datetime}}</p>
            <p class="comment">{{item.comment}}</p>
            <router-link :to="{
                name:'newsdetails',
                params:{
                    id:item.tag_id,
                    title:item.title,
                    media_info:item.media_info,
                    media_name:item.media_name,
                    datetime:item.datetime,
                    abstract:item.abstract,
                    image_list:item.image_list,
                    repin_count:item.repin_count,
                    comment_count:item.comment_count,
                    keywords:item.keywords,
                    collected:item.collected,
                }

            }" class="news clearfix">
                <img v-for="(img,index) in item.image_list" :key="index" v-show="index===0" :src="img.url" alt="" class="newsImg fl">
                <div class="title">{{item.title}}</div>
            </router-link>
            <div class="clearfix shares">
                <span class="fl">
                <Icon type="ios-share-alt" @click.native="showShareBox"/>分享
                </span>
                <span class="fr">
                <Icon type="ios-thumbs-up" color="#d43d3d"/>{{item.good}}
                </span>
                <span class="fr">
                <Icon type="ios-text-outline" />评论&nbsp;&nbsp;&nbsp;
                </span>
            </div>

        </div>
    </div>
    </div>
    <shareBox :show="Sharebox"></shareBox>

</div>
    
</template>
<script>
import axios from 'axios'

import headerBar from '../components/Header-bar.vue'
import shareBox from '../components/Share.vue'
import * as type from '../store/mutation-types.js'
import {
    mapGetters
} from 'vuex'
export default{
    components:{headerBar,shareBox},
    computed:{
       ...mapGetters([
           'Sharebox',
           'vitality',
           'userName',
            'hasIntroduce',
            'introduce'
       ])

    },
    watch:{
        '$router':function(){
            this.$store.commit(type.SHOWSHAREBOX,false)
        }
    },
    methods:{
        showShareBox(){
            console.log('分享 被点了'+this.Sharebox)
            this.$store.commit(type.SHOWSHAREBOX,!this.Sharebox)
        },
        getSelfComment(){
            axios.get('/self_comment.json')
            .then(res=>{
                const Data=res.data
                this.selfComment=Data.data
            })

        }
    },
    data(){
        return {
            selfComment:[]
        }
    },
    created(){
        this.getSelfComment()
    }


}
</script>
<style lang="less">
@import '../assets/css/border.less';
#selfpage{
    .back{
            line-height: 1.2rem;
            margin-left: 0.2rem;
        }
    .share{
        line-height: 1.2rem;
        margin-right: 0.2rem;
    }
    .Myselfpage{
        font-size: 18px;
        line-height: 1.2rem;
        font-weight: 600;
    }
    .self-info{
        // position: relative;
        background: rgb(74, 63, 63);
        padding: 140px 10px 10px 10px;
        color: #fff;
        .leftInfo{
            // margin-top: -10px;
            background: rgb(225, 171, 171);
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .username{
                margin-top: -10px;
                // margin-left: 10px;
                font-size: 0.6rem;
                // font-weight: 800;
            }
            .carefans{
                margin-left: 10px;
                .intro{
                    color: rgb(198, 198, 198);

                    padding: 4px 0px;
                    font-size: 12px;
                }
                
            }

        }
        .rightEdit{
            margin-top: 30px;
            .editInfo{
            color: #fff;
            padding: 8px;
            border-radius:10px;
            border: 1px solid #fff;
            font-size: 0.4rem;

                }
        }
        
    }
    .mycomment{
        position: relative;
        width: 100%;
        padding:10px 10px;
        color: #000;
        // height: 200px;
        // background: #544;
        .headerimg{
            margin-top: 10px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .rightInfo{
            margin-left: 1.3rem;
            margin-top: 3.8px;
            .uname{
                font-size: 16px;
            }
            .comment{
                color: black;
                font-size: 18px;
                font-weight: 800;

            }
            .news{
                display: block;
                // width: 100%;
                margin-bottom: 10px;
                background: rgb(243, 243, 243);
                box-shadow: #000;
                .newsImg{
                    width: 40px;
                    height: 40px;
                    background: #000;
                }
                .title{
                    margin-left: 46px;
                    // margin-left: 8px;
                    // padding: 10px;
                    font-size: 16px;
                    color: #000;

                }
            }
            .shares{
                font-size: 16px;
            }
            

        }
        .borderBottom(1px,#ccc);
    }
    
    
}

</style>
