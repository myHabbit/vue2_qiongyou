<template>
  <div class="section">
    <div class="container">
      <h3 class="title">热门游记与话题</h3>
      <ul class="list">
        <li v-for="(item, index) in sports" v-bind:key="index">
          <img v-bind:src="item.pic" alt="" />
          <button class="spots_btn">精华</button>
          <div class="img">
            <img v-bind:src="item.auth.avatar" alt="" />
          </div>
          <span>{{ item.username }}</span>
          <p>{{ item.subject }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MySpots",
  props: ["sports"],
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.section {
  position: relative;
  padding: 20px 0;
  min-width: 1160px;
}
.container {
  width: 1160px;
  margin: 0 auto;
}
.title {
  position: relative;
  height: 74px;
  line-height: 74px;
  font-size: 34px;
  text-align: center;
  color: #636363;
}
.list {
  width: 100%;
  display: flex;
  flex-flow: wrap;
}
.list li > img {
  width: 275px;
  height: 185px;
}
.list li:hover{
  transform: translateY(-15px);
}
.list li {
  width: 275px;
  height: 290px;
  background: #ccc;
  margin-left: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all .3s linear;
  .img {
    width: 0;
    height: 0;
  }
  .img img {
    position: relative;
    top: -55px;
    left: 40px;
    vertical-align: top;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    border-right: 3px solid #fff;
  }
  .spots_btn {
    position: relative;
    left: 0px;
    top: -180px;
    padding-bottom: 6px;
    width: 50px;
    height: 26px;
    text-align: center;
    background: rgb(216, 105, 105);
    border: 1px solid #ccc;
    color: #fff;
    font: 16px/26px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun,
      sans-serif;
  }
  span {
    position: relative;
    top: -25px;
    left: 100px;
    display: inline-block;
    color: #636363;
  }
  p {
    text-align: center;
    display: block;
    color: #323232;
    transition: all 0.2s ease-in-out;
  }
}
</style>