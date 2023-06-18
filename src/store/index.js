// 该文件用户创建Vuex中最为核心的store

// 导入vue 和 vuex
import vuex from 'vuex'
import Vue from 'vue'
import user from '../store/user'
import state from './state'
// 导入vuex持久化
import createPerState from 'vuex-persistedstate'

// 使用vuex
Vue.use(vuex)


const store = new vuex.Store({
    // 准备actions  用于响应组件中的动作
    // 准备 mutations  用于操作数据（state）
    // 准备state  用于存储数据
    // 准备getter
    // 准备modules
    // 创建store
    state: {
        state:state
    },
    mutations: {
        changePath(state, payload) {
            state.path = payload
        }
    },
    modules: {
        user
    },
    // 插件:
    plugins:[
        createPerState({
            key:'user', //存储的键名  localstorage.setItem('key',xxx)
            path:['user']    //指定存储的模块名称 只有配置上的模块才会存储
        })
    ],
    actions: {

    },

    getters: {

    },
})


// 暴露(导出) store
export default store