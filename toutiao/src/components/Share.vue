<template>
<transition name="slide">
    <div id="share" v-show="show">
        <ul>
            <li class="shareItem"><a href="javascript:;"></a></li>
            <li class="shareItem"><a href="javascript:;"></a></li>
            <li class="shareItem"><a href="javascript:;"></a></li>
            <li class="shareItem"><a href="javascript:;"></a></li>
            <li class="shareItem"><a href="javascript:;"></a></li>
            <li class="shareItem"><a href="javascript:;"></a></li>
            <li class="shareItem"><a href="javascript:;"></a></li>
            <li class="shareItem"><a href="javascript:;"></a></li>
        </ul>
        <div class="cancel" @click="hiddenShare">取消</div>
    </div>
</transition>
    
</template>
<script>
import * as type from '../store/mutation-types'
import {mapGetters} from 'vuex'
export default{
    props:{
        'show':Boolean
    },
    methods:{
        hiddenShare:function(){
            this.$store.commit(type.SHOWSHAREBOX,false)
        }
    },
    computed:{
        ...mapGetters(['Sharebox'])
    }
}
</script>
<style >
#share{
    background-color: rgb(250, 250, 250);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px  solid #ccc;
    z-index: 1000
}
.shareItem{
    display: inline-block;
    width: 25%;
    color: aliceblue;
    text-align: center;
}
.shareItem a{
    background: url('../assets/imgs/wechat.jpg');
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    line-height: 1.2rem;
    border-radius: 50%;
    background-size: cover;
    margin: .5rem .66rem;
    font-size: 18px;
    text-align: center;

}
.cancel{
    border-top: 1px  solid #ccc;
    font-size: 18px;
    text-align: center;
    padding-top: .15rem;
    margin-bottom: .15rem;

    
}
.slide-enter-active,.slide-leave-active{
    transition: all .6s ease;
}
.slide-enter,.slide-leave-active{
    transform: translateY(230px);
    opacity: 0;
}
</style>