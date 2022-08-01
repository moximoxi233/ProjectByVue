<template>
<div id="home">
    <headerBar>
      <div slot="home" class="home-header-bar">
        <Icon type="ios-mail" size="30" color="#fff" class="fl homeEmail"/>
        <span class="logo">
          今日头条
          <Icon type="ios-refresh" size="30"/>
        </span>
        <router-link to="/search" class="search fr">
          <Icon type="ios-search" size="30" color="#fff" class="homeSearch"/>
        </router-link>
      </div>
    </headerBar>
    <!-- <Icon type="md-refresh" size="30" color="#d43d3d" class="pulldown"/> -->
    <ul class="homeNav">
      <li v-for="(item,index) in navbar" :key="index" class="navBarLi">
      <router-link :to="{path:item.url,query:{type:item.type}}">{{item.text}}</router-link>
      </li>
    </ul>
    <div element-loading-text="拼命加载中" style="width: 100%" class="loading"></div>
    <el-alert  class="newsLoadError" title="暂无更新..." type="error" description="此频道暂无更新，请先休息一下！" show-icon></el-alert>
    <transition >
      <ul class="newsContent animated" >
        <router-link v-for='(val,index) in listCon' :key="index" class="newsDetaile" :to="{
          name:'newsdetails',
          params:{
            id:val.tag_id,
            title:val.title,
            media_info:val.media_info,
            media_name:val.media_name,
            datetime:val.datetime,
            abstract:val.abstract,
            image_list:val.image_list,
            repin_count:val.repin_count,
            comment_count:val.comment_count,
            keywords:val.keywords
          }
        }">
          <p class="title">{{val.title}}</p>
          <div >
            <img  alt="加载出错" v-for="(item,index) in val.image_list" :key="index" v-lazy="item.url">
            <div class="bottomInfo clearfix">
              <Icon type="fireball" size="10" color="#d43d3d" v-show="val.hot===1"></Icon>
              <span class="avIcon" v-show="val.label==='广告'">广告</span>
              <span class="writer">{{val.media_name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="comment_count">评论 {{val.comment_count}}</span>
              <span class="datetime">{{val.datetime}}</span>

            </div>
          </div>
        </router-link>
      </ul>
    </transition>
     <!-- 加载更多 -->
        
     <div class="pulldownload" v-show="downLoadMore" @click="pulldownloadmore({kind:first||$router.query.type,flag:downLoadMore})">
       点击加载更多
     </div>

    <!-- 回顶部 -->
    <transition name="bounce" enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
        <Back-top v-show="top" class="animated bounce">
            <div class="top">
                <Icon type="android-arrow-up"></Icon>
            </div>
        </Back-top>
    </transition>

    <bottomNav></bottomNav>
    <!-- <toTop></toTop>   -->
</div>
</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import toTop from '../components/To-top'
import * as type from '../store/mutation-types.js'

import {
  mapGetters,
  mapActions,
  mapState,
} from 'vuex'
// import axios from 'axios'

export default{
    components:{
      headerBar,
      bottomNav,
      toTop  
    },
    data(){
      return {
        navbar:[{
          text: '推荐',
          url: '/home/all',
          type: '__all__'
        },
        {
          text:'热点',
          url:'/home/hot',
          type:'news_hot'
        },
        {
          text:'社会',
          url:'/home/society',
          type:'news_society'
        },
        {
          text:'娱乐',
          url:'/home/entertainment',
          type:'news_entertainment'
        },
        {
          text:'科技',
          url:'/home/tech',
          type:'news_tech'
        },
        {
          text:'汽车',
          url:'/home/car',
          type:'news_car'
        },
        {
          text:'体育',
          url:'/home/sports',
          type:'news_sports'
        },
        {
          text:'财经',
          url:'/home/finance',
          type:'news_finance'
        },
        {
          text:'军事',
          url:'/home/military',
          type:'news_military'
        },
        {
          text:'国际',
          url:'/home/world',
          type:'news_world'
        },
        {
          text:'时尚',
          url:'/home/fashion',
          type:'news_fashion'
        }
        ],
        top:false,
        first:window.location.search.substring(6)

      }
    },
    
    computed:{
      ...mapGetters([
        'newsList',
        // 'loading',
        'list',
        'ifReturnMsg',
        'oneDetail',
        'routerChange',
        'downLoadMore'
      ]),
      loading:{
        get(){
          return this.$store.state.loading;
        },
        set(val){
          return this.$store.state.loading=val
        }
      },
      listCon:function(){
        if(this.$route.query.type){
          return this.list[this.$route.query.type];
        }else{
          return this.list[this.first]
        }
      }
    },
    //beforeRouteUpdate(){}
    //
    methods:{
      ...mapActions([
        'getNews',
        'pulldownloadmore'
      ])
    },
    mounted(){
      this.getNews({kind:this.first,
        flag:this.routerChange
      });
      this.loading=true;
      console.log(this.listCon)
      const _this=this;
      window.addEventListener('scroll',this.handleScroll)
    },
    watch:{
      '$route':function(){
        this.getNews({
          kind:this.$route.query.type,
          flag:this.routerChange
        });
        if(this.routerChange){
          this.$store.commit(type.CHANGE_LOADING_STATE,true)
        }else{
          this.$store.commit(type.CHANGE_LOADING_STATE,false)

        }
        this.first=window.location.search.substring(6)
        this.$store.commit(type.ROUTERECHANGE,true)
      },
    },
    filters:{

    }
}
</script>


<style lang="less" scoped rel="styleheet/less">
@import '../assets/public/border.less';

.home-header-bar{
  &>i{
    margin-top: 0.2rem;
  }
  .logo{
    font-size: 18px;
    vertical-align: middle;
    i{
      vertical-align: middle;
      margin-left: -0.2rem;
    }
  }
  .homeEmail{
    margin-left:  0.22rem;
  }
  .search{
    display: block;
    .homeSearch{
      margin-right: 0.22rem;
      // margin-top: 0.2rem;
    }
  }

}
.homeNav{
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  position: fixed;
  left: 0;
  font-size: 0;
  top: 1.2rem;
  background: rgb(242, 241, 241);
  white-space: nowrap;
  z-index: 999;
  .navBarLi{
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    width: 1.4rem;
    font-size: 16px;
    a{
      color: #000;
    }
    .router-link-active{
      color: #d43d3d;
      font-style: 17px;
      font-weight: bold;
    }
  }
}
::-webkit-scrollbar {
    display: none;
}
.newsContent{
  margin-top: 2.3em;
  width: 100%;
  .newsDetaile{
    width: 94%;
    display: block;
    position: relative;
    margin: 0 auto;
    padding-bottom: 0.15rem;
    .borderBottom(1px,#ccc);
    .title{
      font-size: 16px;
      font-weight: bold;
      color:#000;
      padding-top: 0.2rem;
      padding-bottom: 0.15rem;
    }
    img{
      width: 31.1%;
      margin-right: 0.21rem;
      height: 2.3em;
    }
    .bottomInfo{
      font-style: 10px;
      margin-top: 0.15rem;
        color: #000;

      .writer{
        color: #000;
      }
      .comment_count{

      }
      .datetime{
        float: right;

      }
      .avIcon{
        display: inline-block;
        height: 0.4rem;
        width: 0.9rem;
        text-align: center;
        line-height: 0.4rem;
        border: 1px solid #39f;
        font-size: 10px;
        margin-right: 0.1rem;


      }

    }

  }
}
.pulldownload{
  margin-bottom: 1.3rem;
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #000;
  font-style: 18px;
  text-align: center;
}
.pulldownbtn {
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 0.5rem;
    z-index: 1000000;
}
</style>