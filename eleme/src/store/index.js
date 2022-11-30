// vue3中创建store实例对象的方法是createStore(),按需引入
import { createStore } from "vuex";
export default createStore({
    state:{
        foods:"hhh",
        // 菜品数据（菜单/菜）
        goods:[],
        // 已选择的菜
        selectedFoods:[],
        // 是否展示点餐详情
        showOrder:false,
        // 已选择食物
        clickFood:{},
    },
    actions:{
        //菜品数据请求，数据请求成功后
        
        
        // 计算点餐情况
        selectedFood({commit,state}){
            let foods=[]
            state.goods.forEach(good=>{
                good.foods.forEach(food=>{
                    if(food.count){
                        foods.push(food)
                    }
                })
            })
            commit('updateSelected',foods)
        },
        // 清除点餐
        clearFood({commit,state}){
            state.goods.forEach(good=>{
                good.foods.forEach(food=>{
                    if(food.count){
                        food.count=0
                    }
                })
            })
            commit('getGoods',state.goods)
            commit('updateSelected',[])

        }
    },

    mutations:{
        // 菜品数据更新（添加）
        getGoods(state,newgoods){
            state.goods=newgoods

        },
        // 更新点餐情况
        updateSelected(state,newOrders){
            state.selectedFoods=newOrders
            // console.log(state.selectedFoods)
        },
        // 增加食物
        addFood(state,food){
            // Vue.set(food,'count',++1)
            let count=food.count
            if(!count){
                count=0 
            }
            count+=1
            Reflect.set(food,'count',count)
            // food.count(++1)
            // console.log(food)
        },
        // 减少食物
        decreaseGood(state,food){
            let count=food.count
            if(!count||count<1){
                console.log('不能少了')
                return;
            }
            count-=1
            Reflect.set(food,'count',count)
        },
        // 切换 是否展示点餐详情
        toggleShowOrder(state,flag){
            state.showOrder=flag
        },
        toggleClickFood(state,data){
            state.clickFood=data
        }

    },

    getters:{

    },
    modules:{

    }
})