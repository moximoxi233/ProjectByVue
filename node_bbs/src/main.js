import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
}).$mount('#app')
Vue.filter('formatDate',function(str){
  if(!str) return
  var date=new Date(str)
  var time=new Date().getTime()-date.getTime()//现在的时间减去发布时间相差多少毫秒
  if(time/1000<30){
    //x秒<30
    return "刚刚"
    }//一天：86400000ms 一周：604800000s 一个月 
    else if(time/86400000<=1){
      return "1天"
    }else if(time/604800000<=1){
      return "1周"
    }else if(time/2592000000<=1){
      return "1月"
    }else if(time/31104000000<=1){
      return "1年"
    }else{
      return parseInt(time/31104000000)+"年"
    }
})