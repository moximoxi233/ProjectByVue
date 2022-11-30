import { createRouter, createWebHashHistory } from "vue-router"

import Goods from '../views/Goods'
import Ratings from '../views/Ratings'
import Seller from '../views/Seller'
import Detail from '../views/Detail'
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/goods',
            component:Goods
        },
        {
            path:'/ratings',
            component:Ratings
        },
        {
            path:'/seller',
            component:Seller
        },
        // {
        //     path:'/detail:food',
        //     component:Detail,
        //     name:'detail'
        // },
    ],
  linkActiveClass: 'active'

})

export default router