<template>
  <div class="home">
    <div class="banner">
      <!-- 轮播图 -->
      <Banner></Banner>

      <!-- 搜索框内容 -->
      <div class="search">
        <div v-bind:class="{ bg: isShow }">
          <el-row>
            <el-col :span="10" :offset="8">
              <!-- 搜索框--获取用户输入的值 v-model获取 2.获取焦点事件  -->
              <div class="input-bg">
                <el-input
                  v-model="input"
                  placeholder="请输入内容"
                  v-on:focus="getInput"
                  v-on:blur="changeInput"
                ></el-input>
              </div>
              <!-- 显示内容区域---热门城市 聚焦会显示 输入为空也会显示 -->
              <div class="list" v-show="isShow">
                <p class="info">
                  温馨提示：可以直接输入城市的中文、英文来匹配检索
                </p>
                <div class="title">热门城市</div>
                <div class="hotCitys">
                  <a href="#" v-for="city in citys" v-bind:key="city.id">{{
                    city.name
                  }}</a>
                </div>
              </div>
              <!-- 显示搜索的列表内容展示 -->
              <ul class="list-search" v-show="isShowList">
                <li v-for="item in text" v-bind:key="item.key">
                  {{ item.name }} {{ item.en_name }} {{ item.city.name }}
                  {{ item.country.name }}
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 中间两张图片 -->
      <div class="content">
        <img src="@/assets/images/App.png" alt="" class="img1" />
        <img src="@/assets/images/二维码.png" alt="" />
      </div>

      <!-- 今日推荐 -->
      <div class="section">
        <div class="wrapper">
          <div class="title-th"><span>出境游安全提示</span>今日推荐</div>
          <div class="contont">
            <el-row :gutter="20">
              <el-col
                :span="6"
                v-for="(item, index) in travel_notes"
                v-bind:key="index"
              >
                <div class="item">
                  <img
                    v-bind:src="item.data.pic"
                    width="275px"
                    height="185px"
                  />
                  <div class="info">
                    <div class="subtitle">{{ item.data.subject }}</div>
                    <div class="bottom">
                      <template v-if="item.type == 'video'">
                        <span class="fr">{{ item.data.tag }}</span>
                        <span class="f14">{{ item.data.desc }}</span>
                      </template>
                      <template v-else-if="item.type == 'bbs'">
                        <span class="fr">{{ item.data.views }}人浏览过</span>
                        <span class="f14">{{ item.data.username }}</span>
                      </template>
                      <template v-else>
                        <span class="fr money" v-html="item.data.price"></span>
                        <span class="f14">{{ item.data.start_pos }}</span>
                      </template>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>

      <!-- 穷游商城 -->
      <Shop v-bind:home_shop="home_shop"></Shop>
      <Sports v-bind:sports="sports"></Sports>
    </div>
  </div>
</template>

<script>
import Banner from "./banner/banner.vue";
import city from "@/api/index";
import Shop from "./shop/HomeShop.vue";
import Sports from "./spots/Spots.vue";
export default {
  name: "HomeView",
  data() {
    return {
      input: "",
      isShow: false, //是否显示搜索框热门城市
      citys: "",
      isShowList: false, //是否显示搜索框
      text: "",
      travel_notes: "",
      home_shop: "",
      sports: "",
    };
  },
  components: {
    Banner: Banner,
    Shop: Shop,
    Sports: Sports,
  },
  // 监听input 输入的值
  watch: {
    // input(val) {
    input: function (val) {
      // 如果输入的有值
      if (val !== "") {
        this.isShow = false;
        this.isShowList = true;
        // 网络请求咱们的接口
        city.then((result) => {
          result[1].keyword = val;
          this.text = result[1].data.list;
          console.log(this.text);
        });
      } else {
        // 如果没值
        this.isShow = true;
        this.isShowList = false;
      }
    },
  },
  methods: {
    // 获得焦点
    getInput() {
      if (this.input !== "") {
        this.isShowList = true;
        return;
      } else {
        this.isShow = true;
      }
    },
    // 失去焦点
    changeInput() {
      this.isShow = false;
      this.isShowList = false;
    },
    // 获取当前城市---------
  },

  mounted() {
    //获取当前的热门城市
    city.then((result) => {
      this.citys = result[0].result.hotcity;
    });
    // 获取今日推荐
    city.then((result) => {
      this.travel_notes = result[2].data;
    });
    city.then((result) => {
      this.home_shop = result[3].data;
    });
    city.then((result) => {
      this.sports = result[4].data[0];
    });
  },
};
</script>

<style lang="less" scoped>
.bg {
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 200px;
}
.banner {
  position: relative;
}
.input-bg {
  border-radius: 5px;
  background-image: linear-gradient(
    90deg,
    rgba(40, 213, 164, 0.8),
    rgba(38, 208, 181, 0.8)
  );
  display: flex;
  align-items: center;
  padding: 10px;
}
.search {
  position: absolute;
  width: 100%;
  top: 10%;
  z-index: 99;
}
.list {
  width: 100%;
  height: 240px;
  padding: 20px;
  background-color: #fff;
}
.info {
  font-size: 12px;
  color: #999;
}
.title {
  padding: 10px 10px;
  border-bottom: 1px solid #eee;
}
.hotCitys a {
  display: inline-block;
  margin: 10px 40px 0 40px;
  font-size: 14px;
  color: #666;
  text-decoration: none;
}
// 搜索列表
.list-search {
  width: 100%;
  min-height: 100px;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top: -3px;
}
.list-search li {
  padding: 14px;
}
.content {
  width: 100%;
  height: 140px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content img1 {
  width: 740px;
  height: 170px;
}
.content img:last-child {
  width: 400px;
  height: 110px;
  margin-left: 10px;
}
.section {
  position: relative;
  padding: 10px 0;
  min-width: 1160px;
}
// 今日推荐
.title-th {
  text-align: center;
  font-size: 30px;
  margin: 10px;
  color: #636363;
  font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
  span {
    position: absolute;
    top: 40px;
    display: block;
    width: 180px;
    height: 40px;
    line-height: 40px;
    letter-spacing: 2px;
    color: #fff;
    background: #02db94;
    font-size: 16px;
    border-radius: 20px;
    cursor: pointer;
  }
  span:before {
    content: "";
    display: inline-block;
    background: url(https://fes.qyerstatic.com/FoHcIRgBY9BWd6lSLxr6NVArmEaL);
    background-size: 16px 16px;
    vertical-align: -2px;
    height: 16px;
    width: 16px;
    margin-right: 8px;
  }
  span:after {
    content: "";
    display: inline-block;
    background: url(https://fes.qyerstatic.com/FkvmdDl4snzkbZzyQCrfMQMBeicW);
    background-size: 7px 11px;
    width: 7px;
    height: 11px;
    margin-left: 8px;
  }
}
.item {
  width: 275px;
  height: 300px;
  margin-bottom: 20px;
}
.wrapper {
  width: 1160px;
  margin: 0 auto;
}
.contont .info {
  padding: 0 18px;
  border: 1px solid #ececec;
  border-top: 0;
  height: 114px;
  line-height: 24px;
  overflow: hidden;
  .subtitle {
    margin-top: 14px;
    height: 48px;
    font-size: 16px;
    overflow: hidden;
    color: black;
    font-weight: 700;
  }
}
.bottom {
  margin-top: 16px;
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #636363;
}
.bottom .fr {
  color: #959595;
  float: right;
  font-size: 14px;
}
.money {
  color: #ff7466;
  font-size: 16px;
}
.bottom .f14 {
  display: inline-block;
  max-width: 70%;
  min-width: 55%;
  color: #636363;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
// https://bang.360.cn/aj/getcitycode
// https://www.qyer.com/qcross/place/public.php?action=placesearch&keyword=nn&client=web

// 
https://www.qyer.com/qcross/home/ajax?action=thread&timer=1685092274951&ajaxID=59b60840cebeb65c188239a8
