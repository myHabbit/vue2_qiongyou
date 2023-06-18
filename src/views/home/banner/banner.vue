<template>
  <div class="banner">
    <!-- 
        :interval="5000" 轮播时间
     -->
    <el-carousel :interval="3000" arrow="always" class="carousel">
      <el-carousel-item>
        <img src="@/assets/images/banner1.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/banner2.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/banner3.png" alt="" />
      </el-carousel-item>
        <el-carousel-item>
        <img src="@/assets/images/banner4.png" alt="" />
      </el-carousel-item>
        <el-carousel-item>
        <img src="@/assets/images/banner5.png" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <h3><span>1</span>/4</h3>
      <p>穷游锦囊 | 负责任的旅行</p>
      <strong>让喜马拉雅山去改变你，而不要去改变喜马拉雅山。</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyBanner",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.carousel {
  width: 100%;
  max-height: 650px;
}
.carousel img {
  width: 100%;
  height: 100%;
}
::v-deep .el-carousel__container {
  height: 400px;
}
.banner {
  width: 100%;
  position: relative;
  max-height: 400px;
}
.banner .content {
  width: 400px;
  height: 500px;
  top: 250px;
  left: 75%;
  position: absolute;
  text-align: right;
  z-index: 999;
  display: flex;
  flex-direction: column;
}
.content h3,
p,
span,
strong {
  color: #fff;
  font-weight: 700px;
}
</style>

