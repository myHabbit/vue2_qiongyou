<template>
  <div>
    <!-- 公共的导航区 -->
    <Header></Header>
    <router-view></router-view>
    <!-- 公共底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "myLayout",
  components: {
    Header: Header,
    Footer: Footer,
  },
};
</script>

<style>
</style>