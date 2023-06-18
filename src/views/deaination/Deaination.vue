<template>
  <div>
    <!-- 搜索 -->
    <div class="d-header">
      <img src="@/assets/images/气球.png" alt="" />
      <div class="content">
        <h2>你好,世界!</h2>
        <div class="search">
          <input
            v-model="input"

            @keyup.enter="btnSearch"
            type="text"
            value
            placeholder="搜索国家、城市、目的地"
          />
          <button>搜索</button>
        </div>
        <div class="list" v-show="isShow">
          <ul>
            <li v-for="item in countrys" v-bind:key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 实时热门 -->
    <div class="d-content">
      <h2>实时热门TOP10</h2>
      <div class="list">
        <div class="list-gj">
          <h4>国家TOP10</h4>
          <ul>
            <li><span>1</span> 日本</li>
            <li><span>2</span> 美国</li>
            <li><span>3</span> 法国</li>
            <li><span>4</span> 意大利</li>
            <li><span>5</span> 西班牙</li>
            <li><span>6</span> 泰国</li>
          </ul>
        </div>
        <div class="list-gj">
          <h4>境外TOP10</h4>
          <ul>
            <li><span>1</span> 日本</li>
            <li><span>2</span> 美国</li>
            <li><span>3</span> 法国</li>
            <li><span>4</span> 意大利</li>
            <li><span>5</span> 西班牙</li>
            <li><span>6</span> 泰国</li>
          </ul>
        </div>
        <div class="list-gj">
          <h4>国内TOP10</h4>
          <ul>
            <li><span>1</span> 北京</li>
            <li><span>2</span> 重庆</li>
            <li><span>3</span> 青岛</li>
            <li><span>4</span> 上海</li>
            <li><span>5</span> 杭州</li>
            <li><span>6</span> 天津</li>
          </ul>
        </div>
        <div class="list-gj">
          <h4>景点TOP10</h4>
          <ul>
            <li><span>1</span> 平遥古城</li>
            <li><span>2</span> 北京环球影城</li>
            <li><span>3</span> 玉龙雪山</li>
            <li><span>4</span> 故宫</li>
            <li><span>5</span> 西湖</li>
            <li><span>6</span> 布达拉宫</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import countrys from "@/api/deaination.js";
import axios from 'axios'
export default {
  name: "MyDeaination",
  data() {
    return {
      input: "",
      isShow: false,
      countrys: "",
    };
  },
  methods: {
    // open() {
    //   if (this.input !== "") {
    //     this.isShow = true;
    //   } else {
    //     this.isShow = false;
    //   }
    // },
    // close() {
    //   this.isShow = false;
    // },
    btnSearch(){
      axios.get(`coun/qcross/place/public.php?action=placesearch&keyword=${this.input}&client=web`)
      .then(response=>{
        console.log(response.data.data.list)
        this.countrys= response.data.data.list
        this.isShow = true;
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  // watch监听用户输入 如果用户输入为空 则隐藏下拉框
  watch: {
    input: function (value) {
      if (!value) {
        this.isShow = false;
        return;
      }
      // this.isShow = true;
    },
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.d-header {
  position: relative;
  width: 100%;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  position: absolute;
  top: 170px;
  width: 100%;
  text-align: center;
  h2 {
    font-size: 56px;
    color: #fff;
    font-weight: 700;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
}
.search {
  margin-top: 40px;
}
.search input {
  width: 620px;
  height: 60px;
  border-top-left-radius: 5px;
  font-size: 18px;
  text-indent: 31px;
  border: 1px solid #ccc;
}
.search input::placeholder {
  color: #9b9999;
}
.search button {
  width: 140px;
  height: 60px;
  background-color: #28b76c;
  border: 1px solid #27ad66;
  color: #fff;
  line-height: 58px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.d-content {
  width: 100%;
  padding-top: 50px;
  h2 {
    text-align: center;
    font-weight: 500;
    color: black;
    margin-bottom: 40px;
  }
}
.list {
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.list-gj {
  width: 84px;
}
.list-gj h4 {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
}
.list-gj ul li {
  width: 85px;
  height: 34px;
  padding: 6px 0;
  font-size: 12px;
}
.content .list {
  position: relative;
  top: 3px;
  left: -70px;
  width: 620px;
  background: #fff;
  min-height: 100px;
  border-radius: 5px;
  overflow: hidden;
  li {
    width: 620px;
    height: 30px;
    text-align: left;
    line-height: 30px;
    border-bottom: 1px solid #eee;
    padding: 0 20px;
  }
  li:hover {
    background: #ccc;
  }
}
</style>