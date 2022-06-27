<template>
    <div class="loading" v-if="loading">loading</div>
    <div class="sider" v-else>
        <div class="userinfo">
            <img :src="info.avatar_url" alt="1">
            <div class="msg">
                <p>{{info.loginname}}</p>
                <span>积分：{{info.score}}</span>
            </div>
        </div>
        <div class="posts">
            <p>近期发布的内容</p>
            <ul>
                <li v-for="(post,index) in info.recent_topics" :key="index">{{post.title}}</li>
                <!-- <li>11111</li> -->
            </ul>
        </div>
        <div class="posts">
            <p>近期回复的内容</p>
            <ul>
                <li v-for="(post,index) in info.recent_replies" :key="index">{{post.title}}</li>
                <!-- <li>11111</li> -->
            </ul>
        </div>
    </div>

</template>
<script>
    export default{
        name:'SiderBar',
        data(){
            return {
                info:{},
                loading:true
            }
        },
        methods:{
            getData(){
                this.$http({
                    url:`https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
                    method:'get'
                }).then(res=>{
                    if(res.data.success===true){
                        this.loading=false
                        this.info=res.data.data
                        console.log(this.info)
                    }
                }).catch(err=>{
                    this.loading=true
                    console.log(err)
                })
            }
        },
        beforeMount(){
            console.log('hhhh')
            this.getData()
        }
    }

</script>
<style scoped>
    .loading{
        text-align: center;
    }
.sider{
    width: 30%;
    height: 500px;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}
.sider .userinfo{
    display: flex;
    padding: 20px 10px;
    background-color: rgb(255, 255, 255);

}
.sider .userinfo img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: black;
}
.sider .userinfo .msg{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
}
.sider .userinfo .msg p{
    color: rgb(28, 28, 28);
}
.sider .userinfo .msg span{
    color: #666;
    color: 10px;
}
.posts{
    margin-top: 10px;
    background-color: rgb(255, 255, 255);

}
.posts p{
    background-color: rgb(0, 0, 0);
    font-size: 14px;
    padding: 8px;
    color: rgb(255, 255, 255)
}
.posts ul{
    padding: 8px;
    box-sizing: border-box;
    color: #666;
}
.posts ul li{
    margin: 4px 0;
    font-size: 12px;
}
</style>