<template>
<div id="comment">
 		<el-input  class="editComment" placeholder="写评论..." icon="edit" v-model="my_comment">{{my_comment}}</el-input>
    <Icon type="ios-share-alt" color="#d43d3d" size="30" class="commentInco fr" @click.native="showSharebox"></Icon>
		<Icon type="ios-cloud-outline" @click.native="t" v-show="!collected" size="30" class="commentInco fr"></Icon>
		<Icon type="ios-cloud" @click.native="t" v-show="collected" size="30" color="#d43d3d" class="commentInco fr"></Icon>
		<Icon type="ios-chatbubbles" size="30" class="commentInco fr showcomment" @click.native="tocomment">
    <!-- <span class="commentNum" @click.native='tocomment'>{{commentNum}}</span> -->
		</Icon>
    <span class="commentNum" @click.native='tocomment'>{{commentNum}}</span>

</div>
    
</template>
<script>
import * as type from '../store/mutation-types'
import {mapGetters} from 'vuex'
export default{
  props:['comment'],
  computed:{
    ...mapGetters([
      'logined'
    ])
  },
  data(){
    return {
      'commentNum':this.comment>0?this.comment:'0',
      'collected':this.$route.params.collected,
      'my_comment':''

    }
  },
  created(){
    // console.log("评论数"+this.commentNum+this.comment)
  },
  methods:{
    showSharebox(){
      this.$store.commit(type.SHOWSHAREBOX,true)
    },
    t(){
      this.collected=!this.collected
    },
    tocomment(){
      if(this.logined){
        alert('暂无评论功能')
      }else{
        const _this=this;
        this.$confirm('登录后发表评论，是否前往登录？','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning',
          customClass:'mbox'
        }).then(()=>{_this.$router.push({path:'/my'})})
          .catch(()=>{})
      }
    }
  }
}
</script>

<style lang="less">

#comment{
  background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 1.5rem;
    .editComment{
      width: 54%;
      display: inline-block;
      margin-top: .2rem;
      margin-left: .1rem;
    }
    .commentInco{
      margin-top: 0.2rem;
      margin-right: .55rem;
      padding-top: 4px;
    }
    .showcomment{
      position: relative;
      
    }
    .commentNum{
        position:absolute;
        top: .06rem;
        background: red;
        border-radius: 80%;
        text-align: center;
        line-height: .45rem;
        right: 32%;
        padding: 0.05rem;
        min-width: .55rem;
        color: aliceblue;
        font-size: 8px;
      }
}
  .mbox{
        /* background-color: aqua; */
        width: 350px;
      }
</style>

<style>
.mbox{
  /* !important; */
  width: 350px;
}
</style>