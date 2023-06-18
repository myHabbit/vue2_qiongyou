<template>
  <!-- 顶部区域
   menu  菜单容器
   menu-item  菜单的每一项内容
   submenu  二级下拉菜单
   el-menu-item  下拉菜单内容

   属性： 
   menu  
        default-active  当前激活菜单的index
        mode="horizontal"菜单的模式 默认为垂直模式
        background-color  当前菜单颜色
        text-color  文字颜色
        active-text-color  菜单文字的高亮色
    submenu  二级下拉菜单
        index  唯一标识  string/null


   -->
  <div class="header">
    <div class="logo">logo</div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#323232"
      text-color="#fff"
      active-text-color="#10b041"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/destination">目的地</el-menu-item>
      <el-menu-item index="/community">社区</el-menu-item>
      <el-menu-item index="/travel">行程助手</el-menu-item>
      <el-submenu index="5">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="header-right">
      <template v-if="userinfo.username">
        <span>{{ userinfo.username }}</span>
        <span class="sp1" @click="exit">退出登录</span>
      </template>
      <router-link class="header-right" to="/login" v-else>登陆</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "myHeader",
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    ...mapMutations('user',['deleteUser']),
    exit() {
      // 清空本地的存储
      localStorage.removeItem("user");
      // 清空vuex
      this.deleteUser()
      // 返回登录页
      this.$message({
        message: "退出成功",
        type: "success",
      });
      this.$router.push('/')
    },
  },
  // 计算属性
  computed: {
    ...mapState("user", ["userinfo"]),
  },
  created() {
    this.activeIndex = this.$route.path;
  },
};
</script>

<style  scoped>
.header {
  display: flex;
  background-color: #323232;
  color: #fff;
}
.el-menu-demo {
  flex: 1;
  font-size: 16px;
  font-weight: 700;
}
.header-right {
  font-size: 16px;
  font-weight: 700;
}
.header-right .sp1 {
  font-size: 14px;
  cursor: pointer;
  color: green;
}
.logo,
.header-right {
  padding: 0 30px;
  line-height: 40px;
  cursor: pointer;
  color: #fff;
}
.header-right span {
  margin-right: 10px;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal > .el-menu-item {
  height: 40px;
  line-height: 40px;
}
::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 40px;
  line-height: 40px;
}
</style>