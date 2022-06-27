<template>
<div class="userinfo">
    <div class="loading" v-if="loading">loading...</div>
    <div class="user" v-else>
        <div class="usermsg">
            <img :src="userinfo.avatar_url" alt="">
            <div>
                <p class="uname">{{userinfo.loginname}}</p>
                <p>积分：{{userinfo.score}} &nbsp;&nbsp;&nbsp;近期内容：{{post_len}}条</p>
            </div>
        </div>
        <div class="posts">
            <p>近期发布的主题贴</p>
            <ul>
                <li v-for="(post,index) in posts" :key="index">{{post.title}}</li>
            </ul>
        </div>
        <div class="replay">
            <p>近期回复的主题贴</p>
            <ul>
                <li v-for="(reply,index) in userinfo.recent_replies" :key="index">{{reply.title}}</li>
            </ul>
        </div>
        </div>
        
    </div>
</div>

</template>
<script>
    export default{
        name:'Userinfo',
        data(){
            return {
                userinfo:{},
                loading:true
            }
        },
        methods:{
            getData(){
                this.$http({
                    url:`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`,
                    methods:'get'
                }).then((res)=>{
                    if(res.data.success===true){
                        this.loading=false;

                        this.userinfo=res.data.data
                        console.log("userinfo!!!!",res.data.data)
                    }
                }).catch(err=>console.log(err))
            }
        },
        computed:{
            posts(){
                return this.userinfo.recent_topics
            },
            post_len(){
                return this.userinfo.recent_topics.length
            }
        },
        
        beforeMount(){
            this.loading=true;
            this.getData()
            console.log('hhhhhh',this.$route.params)
        }
    }

</script>
<style scoped>
    .userinfo{
        width: 60%;
    }
.loading{
    text-align: center;
}

.user{
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
}
.user .usermsg{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(151, 146, 141);
    border-radius: 5px;
    padding: 20px;
    /* justify-content: center; */

}
.user .usermsg img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: aqua;
}
.user .usermsg div{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
.user .usermsg .uname{
    font-size: 26px;
    color: rgb(255, 255, 255);
    text-align: center;

}
.user .usermsg p{
    color: rgb(246, 245, 245);
    font-size: 14px;
    text-align: center;
    margin: 4px 0;
}
.user .replay{
   display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 10px;  
    margin: 10px 0; 
    font-size: 15px;

}
.user .replay ul{
    padding: 10px;
    color: rgb(83, 81, 80);
    font-size: 13px;
}
.user .posts{
   display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 10px;  
    margin: 10px 0; 
    font-size: 15px;

}
.user .posts ul{
    padding: 10px;
    color: rgb(83, 81, 80);
    font-size: 13px;
}
.user .posts li{
    margin:8px 0
}
</style>