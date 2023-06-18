//获取数据持久化
// let user = localStorage.getItem('user')
let userinfo = {
    username: '',
    isLogin: false,
    token: ''
}
// if (user) {
//     userinfo = JSON.parse(user)
// }
// 创建并导出
export default {
    namespaced: true,   //开启命名空间
    // 用于存储数据
    state: {
        userinfo
    },
    // 用于操作数据  操作state
    mutations: {
        // 设置用户名
        setUser(state, payload) {
            state.userinfo = payload
        },
        // 清空用户名称
        deleteUser(state) {
            state.userinfo = {
                username: '',
                isLogin: false,
                token: ''
            }
        }
    },
    // 用于响应组件中的动作
    actions: {

    }

}