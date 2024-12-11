import * as VueRouter from 'vue-router'
const routes=[
    {
        path:'/',
        name:'home',
        component:()=>import('../pages/IndexPage.vue')
    },
    {
        path:'/team',
        name:'team',
        component:()=>import('../pages/TeamPage.vue')
    },
    {
        path:'/user',
        name:'user',
        component:()=>import('../pages/UserPage.vue')
    },
    {
        path:'/search',
        name:'search',
        component:()=>import('../pages/SearchPage.vue')
    },
    {
        path:'/user/edit',
        name:'editUser',
        component:()=>import('../pages/EditUserPage.vue')
    }
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
export default router