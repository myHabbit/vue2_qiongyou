<template>
  <div class="shop">
    <div class="container">
      <div class="title">穷游商城</div>
      <ul class="list">
        <li class="card" v-for="(item, index) in home_shop" v-bind:key="index">
          <div class="pic">
            <img v-bind:src="item.pic" alt="" />
          </div>
          <div class="desc">
            <div class="title">{{ item.title }}</div>
            <div class="mark">自营套餐</div>
            <div class="pirce">￥<span v-html="item.price"></span>元起</div>
          </div>
        </li>
        <button class="btnShop">查看更多商品</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyShop",
  props: ["home_shop"],
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.shop {
  background: linear-gradient(180deg, #6dd27c, #1bcdae);
}
.container {
  width: 1160px;
  margin: 0 auto;
}
.title {
  position: relative;
  height: 74px;
  text-align: center;
  color: #636363;
  text-align: center;
  font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
}
.container .list {
  // margin-right: 17px;
  width: 1175px;
  overflow: hidden;
  text-align: center;
  li {
    float: left;
    position: relative;
    margin-top: 10px;
    margin-right: 16px;
    width: 375px;
    overflow: hidden;
    background: #fff;
    margin-bottom: 10px;
  }
}
.pic {
  float: left;
  width: 160px;
  height: 160px;
  img {
    width: 100%;
    height: 100%;
  }
}
.desc {
  padding-left: 180px;
}
.desc .title {
  font-size: 16px;
  color: #000;
  font-weight: 700;
  line-height: 26px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.mark {
  display: inline-block;
  padding: 0 6px;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 14px;
  line-height: 18px;
  height: 20px;
  border: 1px solid #4a90e2;
  color: #4a90e2;
}
.pirce {
  position: absolute;
  bottom: 6px;
  right: 15px;
  font-size: 18px;
  color: #ff7362;
  span {
    font-size: 30px;
    font-weight: 400;
  }
}
.btnShop {
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #ececec;
  border-radius: 3px;
  width: 220px;
  height: 50px;
  vertical-align: top;
  background: #fff;
  font: 20px/50px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
  color: #636363;
  transition: all 0.2s ease-in-out;
  text-align: center;
  margin-bottom: 20px;
}
</style>