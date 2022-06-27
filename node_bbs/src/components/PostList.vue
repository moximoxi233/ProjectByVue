<template>
    <div class="post">
        <div class="loding" v-if="loading">Loading...</div>
        <div class="postList" v-else>
            <ul>
                <li v-for="(item,index) in posts" :key="index">
                    <div class="userhead">
                        <router-link :to="{name:'author',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url" alt="用户头像"></router-link>
                    </div>
                    <!-- <span class="type"></span> -->
                    <div class="post_msg">
                        <router-link class="title" :to="{name:'post_content',params:{id:item.id,name:item.author.loginname}}" >{{item.title}}</router-link>
                        <span>
                            <span>浏览量：{{item.visit_count}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>评论：{{item.reply_count}}</span>
                        </span>
                    
                    </div>
                    <div class="time">
                        <span>{{item.create_at| formatDate}}内 发布</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default{
        name:'PostList',
        data(){
            return{
                posts:[],
                loading:false
            }
        },
        methods:{
            getData(){//拿到数据
                this.$http({
                    url: 'https://cnodejs.org/api/v1/topics',
                    method:'get',
                    params:{
                        page:1,
                        limit:20
                    }
                }).then((res)=>{
                    if(res.data.success){
                        this.loading=false
                        this.posts=res.data.data;
                        console.log("posts!!",res.data.data)
                    }
                }).catch(err=>{
                    console.log(err)
                })

            }
        },
        beforeMount(){
            this.loading=true;
            this.getData()
        }

    }

</script>
<style scoped>
.loding{
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: rgb(106, 106, 106);
}
.postList{
    /* width: 60%; */
    padding: 10px;
    /* margin: 0 auto; */

}

.postList li{
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin-bottom: 2px;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    /* height: 50px; */
}
.postList img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: aquamarine;
}

.postList .post_msg{
    /* flex-grow: 0.7; */
    display: flex;
    width: 80%;
    flex-direction: column;

}
.postList .post_msg .title{
    cursor: pointer;
    font-size: 18px;
    color: rgb(28, 27, 27);
    margin-bottom: 5px;
}
.postList .post_msg span{
    font-size: 12px;
    color: rgb(84, 84, 84);
    
}
.postList .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-size: 14px;
    color: rgb(102, 102, 102);
}

</style>