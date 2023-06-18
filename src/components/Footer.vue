<template>
  <div class="foot">
    <img
      class="img1"
      src="https://fes.qyerstatic.com/FjVySXEde9gCC92sTh8ts7m86bwM?imageslim="
      alt=""
    />
    <div class="footer">
      <ul class="list">
        <li>
          <dl>
            <dt>关于我们</dt>
            <dd>穷游简介</dd>
            <dd>联系我们</dd>
            <dd>合作伙伴</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>加入穷游</dt>
            <dd>招聘职位</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>网站条款</dt>
            <dd>社区指南</dd>
            <dd>版权声明</dd>
            <dd>会员条款</dd>
            <dd>免责声明</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>新手上路</dt>
            <dd>使用帮助</dd>
            <dd>网站地图</dd>
            <dd>旅行工具</dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "myFooter",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.foot {
  width: 100%;
  text-align: center;
}

.img1 {
  width: 330px;
  height: 99px;
  margin-top: 20px;
}

.footer {
  width: 100%;
  height: 224px;
  background: #3c3b3b;
}
.list {
  width: 1160px;
  height: 154px;
  display: flex;
  margin: 0 auto;
  justify-content: flex-start;
}
.list li {
  position: relative;
  margin: 20px 40px;
}
.list li dt {
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
}
.list li dt::after {
  content: "";
  position: absolute;
  top: 1px;
  left: -20px;
  width: 3px;
  height: 16px;
  background: #2aaf55;
  background: linear-gradient(90deg, #2aaf55 0, #39c264);
}
.list li dd {
  margin-bottom: 10px;
  font-size: 12px;
  color: #959595;
  font-weight: 300;
}
</style>
