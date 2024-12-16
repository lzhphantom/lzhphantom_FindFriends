export const routes = [
    {
        path: '/',
        name: 'home',
        title:'主页',
        component: () => import('../pages/IndexPage.vue')
    },
    {
        path: '/team',
        name: 'team',
        title:'队伍',
        component: () => import('../pages/TeamPage.vue')
    },
    {
        path: '/team/add',
        name: 'teamAdd',
        title:'创建队伍',
        component: () => import('../pages/TeamAddPage.vue')
    },
    {
        path: '/team/update',
        name: 'teamUpdate',
        title:'更新队伍',
        component: () => import('../pages/TeamUpdatePage.vue')
    },
    {
        path: '/team/join',
        name: 'teamJoin',
        title:'我加入的队伍',
        component: () => import('../pages/MyJoinTeamPage.vue')
    },
    {
        path: '/team/create',
        name: 'teamCreate',
        title:'我管理的队伍',
        component: () => import('../pages/MyTeamPage.vue')
    },
    {
        path: '/user',
        name: 'user',
        title:'个人中心',
        component: () => import('../pages/UserPage.vue')
    },
    {
        path: '/user/update',
        name: 'userUpdate',
        title:'个人信息',
        component: () => import('../pages/UserUpdatePage.vue')
    },
    {
        path: '/user/login',
        name: 'login',
        title:'登录',
        component: () => import('../pages/UserLoginPage.vue')
    },
    {
        path: '/search',
        name: 'search',
        title:'搜索',
        component: () => import('../pages/SearchPage.vue')
    },
    {
        path: '/user/list',
        name: 'userList',
        title:'搜索结果',
        component: () => import('../pages/SearchResultPage.vue')
    },
    {
        path: '/user/edit',
        name: 'editUser',
        title:'用户信息修改',
        component: () => import('../pages/EditUserPage.vue')
    }
]