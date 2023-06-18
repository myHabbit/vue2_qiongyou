// 引入路由
import router from './index'
// 引入vuex
import store from '../store/index'
// 配置路由守卫(全局前置路由守卫)

router.beforeEach((to, from, next) => {
    // 判断我们进入这个路由界面的时候是否需要登录
    if (to.meta.isLogin === true) {  //为true表示需要登录
        // 判断是否登录
        if (store.state.user.userinfo.isLogin === true) {
            next()
        } else {
            // 即将进入登录界面  存储上一刻即将进入的路径 目的，登录后要跳转到原本要进入的页面
            store.commit('changePath',to.path)
            next('/login')
        }
    } else {   //表示不需要登录
        next()
    }
})
