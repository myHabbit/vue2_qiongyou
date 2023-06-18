<template>
  <div class="travel">
    <div class="logo">
      <a href="#"></a>
      <ul>
        <li>使用帮助</li>
        <li>APP下载</li>
        <li>免费私人订制</li>
        <li>企业版</li>
      </ul>
    </div>
    <div class="content">
      <div class="minit"></div>
      <div class="txt">共有2222万穷游er,创建了49,653,936个行程</div>
      <span class="doodle">
        <img
          class="no_moon"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_moon.png"
        />
        <img
          class="no_hill"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_hill.png"
        />
        <img
          class="no_road"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_road.png"
        />
        <img
          class="no_cloud"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_cloud.png"
        />
        <img
          class="no_tree"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_tree.png"
        />
        <img
          class="no_stone"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_stone.png"
        />
        <img
          class="no_plan_sd home-doodle-sd"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_plan_sd.png"
        />
        <img
          class="no_plan home-doodle"
          src="//fes.qyerstatic.com/_plan_/desktop/home/img/doodles/d_plan.png"
        />
      </span>
      <button class="btn">+创建新的行程</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTravel",
};
</script>

<style lang="less" scoped>
.travel {
  width: 100%;
  background: #fff;
  .logo {
    height: 60px;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      margin-right: 50px;
      li {
        margin-right: 10px;
        font-size: 20px;
        color: #7d7d7d;
        cursor: pointer;
      }
    }
  }
  .logo a {
    display: block;
    margin-left: 60px;
    height: 50px;
    background: url(//fes.qyerstatic.com/_plan_/desktop/home/img/logo.png)
      center center no-repeat;
    width: 138px;
    background-size: auto 40px;
  }
}
.content {
  width: 100%;
  height: 600px;
  background: #41c074;
  position: relative;
}
.doodle {
  text-align: left;
  color: #323232;
  width: 466px;
  height: 209px;
  top: 240px;
  left: 60px;
  margin: auto;
  position: relative;
  display: block;
  transition: all linear 3s;
}
.doodle:hover{
  transform: translateX(-40px);
}
.minit {
  text-align: left;
  color: #323232;
  outline: 0;
  margin: 0;
  padding: 0;
  width: 414px;
  height: 56px;
  position: absolute;
  left: 52%;
  top: 100px;
  margin-left: -207px;
  background-image: url(//fes.qyerstatic.com/_plan_/desktop/home/img/banner-2-txt.png);
  background-repeat: no-repeat;
}
.txt {
  font-size: 18px;
  position: absolute;
  top: 160px;
  left: 40%;
  color: #fff;
}
.no_moon {
  position: absolute;
  left: 85px;
  top: -5px;
  width: 44px;
  height: 45px;
}
.doodle img.no_hill {
  width: 353px;
  height: 117px;
  left: 56px;
  bottom: 85px;
  transform: translateZ(30px);
}
.no_road {
  width: 466px;
  height: 90px;
  left: 0;
  bottom: 0;
  position: absolute;
  left: -40px;
  top: 110px;
}
.no_cloud {
  width: 415px;
  height: 58px;
  position: absolute;
  left: -15px;
}
.no_tree {
  width: 379px;
  height: 48px;
  position: absolute;
  top: 80px;
  left: -10px;
}
.no_stone {
  width: 150px;
  height: 50px;
  position: absolute;
  top: 300px;
  left: 10px;
}
.no_stone {
  position: absolute;
  width: 23px;
  height: 7px;
  top: 20px;
}
.no_plan {
  width: 49px;
  height: 62px;
  position: absolute;
  top: 70px;
  left: 160px;
}
.btn{
  width: 180px;
  height: 40px;
  color: green;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  top: 500px;
  left: 45%;
}
</style>