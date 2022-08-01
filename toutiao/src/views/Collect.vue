<template>
    <div id="collect">
        <headerBar class="collect-header">
  			<div slot="collect">
                <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" @click.native="$router.go(-1)"></Icon>
                <router-link to="/collect/my">收藏</router-link>
                <router-link to="/collect/readhistory">阅读</router-link>
                <router-link to="/collect/sendhistory">推送</router-link>
            </div>
        </headerBar>
        <div class="collect_content">
            <div class="con">
                <router-link v-for="(item,index) in myCollect" :key="index" class="collect_items clearfix"
                :to="{
                    name:'newsdetail',
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
                }">
                    <div v-if="!item.image_list">1</div>
                    <img v-else src="img.url" alt="" v-for="(img,index) in item.image_list" :key="index" v-show="index===1" class="fr">
                    <h2 class="collect_title">{{item.title}}</h2>
                    <div class="name_comment">
                        <span class="collect_name">{{item.media_name}}</span>
                        <span class="collect_comment">{{item.comment_count}}</span>
                    </div>
                </router-link>
            </div>
        </div>
        <bottomNav></bottomNav>
    </div>
</template>
<script>
import axios from 'axios'
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
export default{
    components:{headerBar,bottomNav},
    data(){
        return {
            myCollect:[]
        }
    },
    methods:{
        getMY(){
            axios.get('/my.json').then(res=>{
                this.myCollect=res.data.data
            },err=>{
                console.log('收藏的内容请求失败')
            })
        }

    },
    created(){
        this.getMY()
    }
}
</script>
<style>
</style>