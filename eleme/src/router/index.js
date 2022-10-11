import { createRouter, createWebHashHistory } from "vue-router"

import Goods from '../views/Goods'
import Ratings from '../views/Ratings'
import Seller from '../views/Seller'
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
    ],
  linkActiveClass: 'active'

})

export default router