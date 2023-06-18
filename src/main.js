import Vue from 'vue'
import App from './App'

// 引入vue-router
import vueRouter from 'vue-router'
// 引入elementui
import ElementUI from 'element-ui';
// 引入element的样式
import 'element-ui/lib/theme-chalk/index.css';
// 导入初始化的样式
import 'normalize.css'

import './router/premiss'

// 引入vuex
import vuex from 'vuex'
// 使用vuex
Vue.use(vuex)
// 引入store
import store from './store/index'

// 应用ElementUI
Vue.use(ElementUI);
Vue.use(vueRouter)
// 引入路由器
import router from './router/index.js'

Vue.config.productionTip = false

new Vue({
  router:router,
  el:'#app',
  store:store,
  render: h => h(App),
})
