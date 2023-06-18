import Vue from "vue";
import vueRouter from 'vue-router'

import Layout from '../views/layout/layout.vue'
import Login from '../views/login/login.vue'
import HomeView from '../views/home/HomeView.vue'
const About = () => import('../views/AboutView.vue')
import Destination from '../views/deaination/Deaination.vue'
import Travel from '../views/travel/Travel.vue'
import Community from '../views/community/Community.vue'
// 在router的index.js加上以下代码 在user前面
const routerPush = vueRouter.prototype.push
vueRouter.prototype.push  = function (location){
    return routerPush.call(this,location).catch(err =>err)
}
// 应用vueRouter
Vue.use(vueRouter)

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: '/destination',
                component: Destination,
                // 配置路由元信息
                meta: {
                    isLogin: true
                }

            },
            {
                path: '/travel',
                component: Travel,
                meta: {
                    isLogin: true
                }
            },
            {
                path: '/community',
                component: Community,
                meta: {
                    isLogin: true
                }
            },
            {
                path: '/about',
                name: 'about',
                component: About,
                meta: {
                    isLogin: true
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }

]
const router = new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})




export default router


