<template>
    <div id="setup">
        <headerBar>
            <div class="setup_hearder" slot="setup-header">
                <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" @click.native="goBack"></Icon>
                设置
            </div>
        </headerBar>
        <div class="item">

        </div>
    </div>
</template>
<script>
import headerBar from '../components/Header-bar.vue'
import * as type from '../store/mutation-types.js'
import {mapActions,mapGetters} from 'vuex'
// import { component } from 'vue/types/umd'
export default{
    components:{
        headerBar
    }
}
</script>
<style lang="less">
@import '../assets/css/border.less';
.setup_hearder{
        background: rgb(255, 255, 255);
        font-size: 18px;
        font-weight: 600;
        color: black;
        text-align: center;
        .borderBottom(1px,#ccc);
        .back{
            line-height: 1.2rem;
            margin-left: 0.3rem;
        }
       
    }
</style>
