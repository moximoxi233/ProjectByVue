<template>
<div class="articleSection">
    <div class="loading" v-if="loading">
        Loading...
    </div>
    <div class="article" v-else>
        <h1>{{post.title}}</h1>
        <ul>
            <li>分类：{{postType}}</li>
            <li>浏览量：{{post.visit_count}}</li>
            <li>发布时间：{{post.create_at|formatDate}}内</li>
            <li>作者：{{post.author.loginname}}</li>
        </ul>
        <p v-html="post.content" id="content">文章内容</p>
    </div>
    <div class="reply" v-for="(reply,index) in post.replies" :key="index">
        <img :src="reply.author.avatar_url" alt="1">
        <!-- <router-link><img src="" alt=""></router-link> -->
        <div>
            <a href="#" class="user">{{reply.author.loginname}}</a>
            <!-- <router-link :to="{name:'author',params:{loginname:item.author.loginname}}">用户名</router-link> -->
            <span>{{index+1}}楼</span>

            <p v-html="reply.content"></p>
        </div>
        <span v-if="reply.ups.length>0">❤️<span>x{{reply.ups.length}}</span></span>
    </div>
</div>

</template>
<script>
    export default{
        name:'Article',
        data () {
		    return {
		      post: {                   
		      	author: {
	                loginname: 'temp',//设置默认值，防止Vue在axios未被调用前报错
	               }
		      },
	  	      loading:true
		    }
		},
        computed:{
            postType(){
                let type=this.post.tab
                if(type=='ask'){
                    return '问答'
                }
                if(type=='share'){
                    return '分享'
                }
                if(type=='job'){
                    return '招聘'
                }
                if(type=='good'){
                    return '精华'
                }

            },
        },
        methods:{
           getData(){
               this.$http({
                   url: `https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象） 

                //    url:`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`,
                   method:'get',
                   params:{
                    mdrender:true
                   }
               }).then(res=>{
                   if(res.data.success==true){
                       this.loading=false
                       this.post=res.data.data
                        console.log("article",res.data.data)
                   }
               }).catch(err=>{
                this.loading=true
                console.log(err,"ooo")
               })
           } 
        },
        beforeMount(){
	        this.getData();
            // console.log('articlehhhhh')
        },
        watch:{
			$route(){
				this.getData();
			}
		}
    
    }

</script>
<style scoped>
	@import url("../assets/markdown-github.css");

.articleSection{
    width: 60%;
    background-color: antiquewhite;
    /* padding: 10px; */
    margin-top: 10px;
}
.articleSection .loading{
text-align: center;
}
.article h1{
    font-size: 22px;
}
.article{
   background-color: rgb(255, 255, 255); 
   padding: 10px;
}
.article ul{
 display: flex;
 justify-content: flex-start;
 /* align-items: flex-start; */
}
.article ul li{
margin: 5px 25px 5px 0px;
font-size: 12px;
color: rgb(62, 62, 62);
}
.reply{
    margin-top: 10px;
    background-color: rgb(255, 255, 255); 
    padding: 10px;
    display: flex;
    /* align-items:flex-start; */
    /* justify-content: flex-start; */
}
.reply img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: black;

}
.reply div{
    /* width: 80%; */
    flex-grow: 1;
    padding: 0 10px;
}
.reply .user{
    font-size: 18px;
    color: #333;
    margin-right: 10px;
}
.reply div span{
    font-size: 12px;
    color: rgb(62, 62, 62);
}
.reply p{
    margin-top: 6px;
    font-size: 14px;
    color: rgb(58, 58, 58);
}
.reply span{
    font-size: 20px;
}
.reply span span{
    font-size: 14px;
    color: rgb(73, 73, 73);
}
</style>