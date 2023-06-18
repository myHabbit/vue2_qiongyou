<template>
  <div class="header">
    <div class="logo">
      <h2>穷游论坛<span>分享~结伴~找攻略</span></h2>
      <button>发新帖</button>
    </div>
    <div class="content">
      <div class="content-img">
        <div class="content-center">
          <img
            src="https://pic.qyer.com/album/user/4108/49/RUhVSh4OaEs/index/680x400"
            alt=""
          />
        </div>
        <div class="txt">
          <span>读书康</span>
          <p>
            【塔库电台】雪季余音与春季序曲—慕尼黑/萨尔茨堡/哈尔施塔特+非典型《音乐之声》打卡攻略
          </p>
          <div class="imgs">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCommunity",
};
</script>

<style lang="less" scoped>
.logo {
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h2 {
    font-size: 30px;
    color: #147850;
    font-weight: 400;
  }
  h2::after {
    content: "";
    position: absolute;
    top: 50px;
    left: 430px;
    width: 2px;
    height: 25px;
    background: #147850;
  }
  span {
    font-size: 18px;
    margin-left: 40px;
    font-weight: 500;
  }
  button {
    width: 125px;
    border: 1px solid #1c95dd;
    background: #1c95dd;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
  }
}
.content {
  width: 100%;
  height: 400px;
  background: url("http://k21vin.gitee.io/front-end-data-visualization/assets/bg01.13dfb262.jpg");
  // filter: blur(2px);
}
.content-img {
  width: 980px;
  height: 100%;
  margin: 0 auto;
  display: flex;
}

.content-center {
  img {
    width: 680px;
    height: 400px;
  }
}
.txt {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  p {
    font-size: 20px;
    color: #fff;
  }
}
.txt > span {
  color: #fff;
  font-size: 14px;
  display: block;
  margin-left: 20px;
}
.imgs {
  display: flex;
}
.txt .imgs > span {
  width: 48px;
  display: block;
  height: 48px;
  background: url("http://k21vin.gitee.io/front-end-data-visualization/assets/bg01.13dfb262.jpg");
  background-size: cover;
  margin-left: 10px;
  margin-top: 50px;
  cursor: pointer;
}
</style>