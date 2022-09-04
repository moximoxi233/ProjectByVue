<template>
<div id="editProfile">
    <headerBar>
            <div class="editProfile_hearder" slot="editprofile-header">
                <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" @click.native="$router.go(-1)"></Icon>
                编辑资料
            </div>
    </headerBar>
    <div class="container">
        <div class="editprofile_item">
            头像
            <Icon type="ios-arrow-forward" size="26" color="#ccc" class="fr toEdit"/>
            <img src="../assets/imgs/head.jpg" alt="" class="fr headPic">
            <input type="file" class="file">


        </div>
        <el-button is="div" type="text"  class="editprofile_item">
                用户名
            <Icon type="ios-arrow-forward" size="26" color="#ccc" class="fr toEdit"/>
            <span class="fr username" v-model="userName">{{userName}}</span>
        </el-button>
        <el-button is="div" type="text" @click="editintroduce"  class="editprofile_item">
            介绍
            <Icon type="ios-arrow-forward" size="26" color="#ccc" class="fr toEdit"/>
            <span class="fr username" v-model="introduce">{{introduce}}</span>
            <!-- <input type="text " v-model="introduce" value="introduce"> -->
        </el-button>
    </div>
    
</div>
    
</template>
<script>
import * as type from '../store/mutation-types.js'
import headerBar from '../components/Header-bar.vue'
import {
    mapGetters,
    mapActions
} from 'vuex'
export default{
    components:{
        headerBar
    },
    computed: {
        ...mapGetters([
            'userName',
            'introduce'
        ])
    },
    methods:{
        editintroduce(){
            this.$prompt('请输入个人简介～','修改简介',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                inputValue:this.introduce,
            }).then(({value})=>{
                if(value.length<25){
                    this.$store.commit(type.CHANGEINTRODUCE, value)
                }else{
                    alert("简介内容不得超过25字")
                }
            }).catch(()=>{

            })
        },

    },
    created(){
        console.log(this.userName+this.introduce+'hhh')
    }
   
}
</script>
<style lang="less">
@import '../assets/css/border.less';
.editProfile_hearder{
        background: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 800;
        color: black;
        text-align: center;
        .borderBottom(1px,#ccc);
        .back{
            line-height: 1.2rem;
            margin-left: 0.2rem;
        }
       
    }
.container{
    width: 100%;
    margin-top: 1.4rem;
    position: relative;
    padding: 0 0.3rem;
    .editprofile_item{
        position: relative;
        font-size: 16px;
        color: #000;
        font-weight: 600;
        height: 1.2rem;
        line-height: 1.2rem;
        .borderBottom(1px,#ccc);

        img{
            width: 30px;
            height: 30px;
            border-radius: 15px;
            margin-top: 0.3em;

        }
        .file{
            position: absolute;
            top :-5px;
            display: inline-block;
            opacity: 0
        }
        .username{
                    margin-right: .2rem;
                    font-size: 14px;
                    font-weight: normal;
        }
        .toEdit{
            margin-top: 0.3em;
        }
        
    }
}
</style>
