import * as VueRouter from 'vue-router'
import {routes} from "../config";


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})
export default router