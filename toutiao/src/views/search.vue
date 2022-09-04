<template>
<div id="search">
    <headerBar>
        <div class="search" slot="search">
            <Icon type="ios-arrow-back" size="28" color="#fff" class="fl back" @click.native="$router.go(-1)"></Icon>
            搜索
        </div>
    </headerBar>
    <!-- 搜索栏 -->
    <div class="searchBar">
        <!-- 搜索输入框 -->
        <el-input 
            v-model="input" 
            placeholder="请输入内容"
            @keyup.native.enter="search(input)" 
            class="searchInput fl">
        </el-input>
        <!-- 历史内容list -->
        <el-popover ref="popover4" placement="bottom" trigger="click" id="popover">
            <ul class="searchList" v-show="test.lengthz!=0"> 
                <li class="searchListItem" v-for="(item,index) in test" :key='index'>
                    <span @click="historySearch(item)">
                        <Icon type="ios-search" size="30" color="#ccc" class="homeSearch"/>
                        {{item}}
                    </span>
                    <i class="el-icon-delete fr" @click.prevent="clearThisHistory(index)"></i>

                </li>
					<div class="clearHistory" @click="clearHistory" v-show="test.length!=0">清空历史记录</div>
            </ul>
            <ul class="noHistory" v-show="test.length==0">
                暂无历史搜索内容
            </ul>
        </el-popover>

        <span class="toutiaoIcon" v-popover:popover4 >历史记录</span>
    </div>
    <!-- 加载提示 -->
    <div v-show="loading" v-loading="loading" element-loading-text="拼命加载中" style="width: 100%" class="loading"></div>
    <!-- 搜索结果 -->
    <div class="searchNews">
			<router-link 
				v-for="(val,index) in con"
				:to="{
                    name:'newsdetail',
                    params:
                        {   id:val.tag_id,
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
                }"
                :key="index" 
				class="searchNewsItem" 
				v-show="val.media_creator_id&&val.title"
				>
				<p class="title" v-html="replace(val.title,input)"></p>
                <div>
                    <img alt="加载出错" v-for="(img,index) in val.image_list" :key="index" v-lazy="img.url">
                    <div class="bottomInfo clearfix">
                        <Icon type="fireball" size="10" color="#d43d3d" v-show="val.hot===1"></Icon>
                        <span class="avIcon" v-show="val.label==='广告'">广告</span>
                        <span class="writer">{{val.media_name}}</span> &nbsp;&nbsp;
                        <span class="comment_count">评论&nbsp;{{val.comment_count}}</span>
                        <span class="datetime">{{val.datetime}}</span>
                    </div>
                </div>
			</router-link>
		</div>
    

</div>
    
</template>
<script>
import axios from 'axios'
import jsonp from 'jsonp'
import * as type from '../store/mutation-types.js'
import headerBar from '../components/Header-bar.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default{
    components:{headerBar},
    data(){
        return {
            loading:false,
            flag:true,
            input:'',
            con:[],
            test:[],
            searchCon:''
        }
    },
    beforeRouteLeave(to,from,next){
      if(to.name == 'home'){
			this.con = [];
			this.input = '';
			document.getElementsByClassName('el-popover')[0].style.display = 'none';
			next();
		}
		next();  
    },
    methods:{
        replace(title,input){
            const reg=new RegExp(''+input+'','gim')
            if(title){
                return title.replace(reg,'<font class="red">'+inp+'</font>')
            }else{
                return false
            }
        },
        historySearch(item){
            this.input=item;
            this.flag=false
            this.search(item);
            this.con=[]
            this.$nextTick(function(){
                document.getElementsByClassName('el-popover')[0].style.display=none
            })
        },
        clearHistory(){
            this.$confirm('确认清除历史记录？',"提示",{
                confirmButtonText: '确定',
	          	cancelButtonText: '取消',
	          	type: 'warning'
            }).then(()=>{
                this.test=[]
                this.$message({
                    type:'success',
                    message:'删除成功'
                })
            }).catch(()=>{
                
            })
        },
        clearThisHistory(index){
            this.$confirm('确定要删除这条记录吗？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                this.test.splice(index,1);
                this.$message({
                    type:'success',
                    message:'删除成功'
                })
            }).catch(()=>{

            })
        },
        //回车搜索
        search(input){
            const _this=this
            input=input.trim()
            if(input){
                if(this.searchCon==input){
                    if(this.flag){
                        return;
                    }
                }
                _this.loading=true
                jsonp('http://www.toutiao.com/search_content/?offset=0&format=json&keyword='+input+'&autoload=true&count=20&cur_tab=1',function(err,res){
					_this.con = res.data;
					_this.loading = false;
				})
                this.test.unshift(input)
                this.searchCon=input
                this.flag=true
            }else{
                this.searchCon=''
                this.con=[]
            }
        }

    }

}
</script>
<style lang='less'>
@import '../assets/css/border.less';

.search{
        background: #d43d;
        font-size: 18px;
        font-weight: 800;
        color: rgb(255, 255, 255);
        text-align: center;
        .borderBottom(1px,#ccc);
        .back{
            line-height: 1.2rem;
            margin-left: 0.2rem;
        }
       
}
.searchBar{
    margin-top: 1.4rem;
    padding-left: 2%;

    width: 100%;
    .searchInput{
       width: 90%; 
    }
    .toutiaoIcon{
        display: inline-block;
        padding: 0 .05rem;
        font-size: 13px;
        text-align: center;
        width: 10%;
        

    }
}
.loading{
		margin-top: 1rem;
}
.searchNews{
		.searchNewsItem {
	        width: 94%;
	        display: block;
	        position: relative;
	        margin: 0 auto;
	        padding-bottom: 0.15rem;
	        .borderBottom(1px,#ccc);
	        .title {
	            font-size: 16px;
	            font-weight: bold;
	            color: #000;
	            padding-top: 0.2rem;
	            padding-bottom: 0.15rem;
	        }
	        img {
	            width: 31.1%;
	            margin-right: 0.21rem;
	            height: 2.3rem;
	        }
	        .bottomInfo {
	            font-size: 10px;
	            margin-top: 0.15rem;
	            .writer {
	                color: #000;
	            }
	            .comment_count {
	                color: #000;
	            }
	            .datetime {
	                float: right;
	                color: #000;
	            }
	            .avIcon {
	                display: inline-block;
	                height: 0.4rem;
	                width: 0.9rem;
	                text-align: center;
	                line-height: 0.4rem;
	                border-radius: 4px;
	                border: 1px solid #39f;
	                font-size: 10px;
	                margin-right: 0.1rem;
	            }
	        }
	    }
	}
.el-popover{
	width: 97%;
	.searchListItems{
		display: block;
		position: relative;
		height: .9rem;
		line-height: .9rem;
		.borderBottom(1px,#ccc);
		font-size: 16px;
		i{
			padding: 0 .2rem;
			line-height: .9rem;
		}
	}
	.clearHistory{
		font-size: 14px;
		height: .7rem;
		line-height: 1rem;
		text-align: center;
	}
	.noHistory{
		font-size: 14px;
	}
}
</style>
