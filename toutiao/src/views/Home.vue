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
    <Icon type="md-refresh" size="30" color="#d43d3d" class="pulldown"/>
    <ul class="homeNav">
      <li v-for="(item,index) in navbar" :key="index" class="navBarLi">
      <router-link :to="{path:item.url,query:{type:item.type}}">{{item.text}}</router-link>
      </li>
    </ul>
    <div element-loading-text="拼命加载中" style="width: 100%" class="loading"></div>
    <el-alert  class="newsLoadError" title="暂无更新..." type="error" description="此频道暂无更新，请先休息一下！" show-icon></el-alert>
    <transition >
      <ul class="newsContent animated" >
        <!-- <li v-for='(val,index) in listCon' :key="index"></li> -->
      </ul>
    </transition>
    <bottomNav></bottomNav>
    <toTop></toTop>  
</div>
    

</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import toTop from '../components/To-top'

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
      // ...mapGetters([
      //   'newsList',
      //   'loading',
      //   'list',
      //   'ifReturnMsg',
      //   'oneDetail',
      //   'routerChange',
      //   'downLoadMore'
      // ]),
      listCon:function(){
        if(this.$route.query.type){
          return this.list[this.$route.query.type];
        }else{
          return this.list[this.first]
        }
      }
    },
    beforeMount(){
      // console.log(this.$route)
      // console.log(listCon)
    }
}
</script>


<style lang="less" scoped rel="styleheet/less">

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
</style>