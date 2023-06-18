<template>
  <div class="login">
    <div class="wrapper">
      <div class="header">
        <img
          src="	https://fes.qyerstatic.com/fe_ssr_passport/41bd0a522fbeb024a41208a408ca73ec.png"
          alt=""
        />
        <span>登录</span>
      </div>
      <div class="content">
        <div class="c-header">
          <span>账号登录</span>
          <span>手机快捷登录</span>
        </div>
        <div class="c-content">
          <h4>关于穷游网将实行<span>手机绑定实名制的说明</span></h4>
          <input
            v-model="username"
            v-on:blur="isUsername"
            type="text"
            class="inp"
            placeholder="手机号/邮箱/用户名"
          />
          <input
            v-model="password"
            v-on:blur="isPassword"
            type="password"
            placeholder="密码"
          />
          <p>忘记密码</p>
          <button v-on:click="isSubmit">登录</button>
          <div class="logins">
            <span class="sp1"></span>
            <span class="sp2"></span>
            <span class="sp3"></span>
            <span class="sp4"></span>
          </div>
          <div class="footer">
            <span>还没有穷游账号? <a href="">立即注册</a></span>
            <strong>境外手机号登录</strong>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "myLogin",
  data() {
    return {
      username: "",
      password: "",
      a: "",
      b: "",
    };
  },
  computed: {
    ...mapState(["path"]),
  },
  // 表单校验
  methods: {
    // 辅助函数
    ...mapMutations('user',['setUser']),
    isUsername(e) {
      let user = /^[a-zA-Z0-9-_]{3,9}$/;
      let a = user.test(this.username);
      this.a = a;
      if (a === true) {
        e.target.style.border = "1px solid green";
      } else {
        e.target.style.border = "1px solid red";
        confirm("您输入的用户名有误 请重新输入");
      }
    },
    isPassword(e) {
      let pword = /^[a-zA-Z0-9_-]{3,6}$/;
      let b = pword.test(this.password);
      this.b = b;
      if (b === true) {
        e.target.style.border = "1px solid green";
      } else {
        e.target.style.border = "1px solid red";
        confirm("您输入的密码有误 请重新输入");
      }
    },
    isSubmit() {
      if (this.username === "admin" && this.password === "123") {
        // 登陆成功
        // 假设成功---后端返回的数据
        let obj = {
          username: this.username,
          password: this.password,
          token: "hello succes",
          isLogin: true,
        };
        this.$message({
          message: "恭喜您 登陆成功",
          type: "success",
        });
        // 存储vuex
        // 辅助函数读取

        this.setUser(obj);
        // 直接读取
        // this.$store.commit('user.getUser',obj)
        // 数据持久化
        // localStorage.setItem("user", JSON.stringify(obj));
        // 返回首页
        // setTimeout(() => {
        this.$router.push(this.path);
        // }, 1000);
      } else {
        // 登陆失败
        this.$message.error("账号或者密码有误");
      }
      // if (this.a === true && this.b === true) {
      //   alert("登陆成功");
      // } else {
      //   alert("请输入正确用户名密码");
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 960px;
  min-height: 765px;
  background: url("https://fes.qyerstatic.com/fe_ssr_passport/ecb39528d488b6c520f7ddd3898379d6.jpg")
    top/cover no-repeat;
}
.wrapper {
  width: 1160px;
  margin: 0 auto;
}
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 80px;
  img {
    width: 127px;
    height: 46px;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    font-size: 24px;
    font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    color: #fff;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    transform: translateY(12px);
  }
}
.c-header span::after {
  content: "";
  position: absolute;
  top: 200px;
  width: 20px;
  height: 10px;
}
.c-header > span:hover {
  color: #3f9f5f;
  border-bottom: 1px solid #3f9f5f;
}
.content {
  width: 380px;
  height: 436px;
  background: #fff;
  position: absolute;
  top: 160px;
  left: 500px;
  padding: 0 20px;
  .c-header {
    width: 100%;
    height: 60px;
    display: flex;
    line-height: 60px;
    justify-content: space-around;
  }
  span {
    cursor: pointer;
    font-size: 17px;
  }
}
.c-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 14px;
    color: #959595;
    font-weight: 500;
  }
  span {
    color: #3f9f5f;
    font-size: 14px;
  }
  input {
    margin-top: 30px;
    width: 330px;
    height: 40px;
  }
  input::placeholder {
    font-size: 14px;
    color: #636363;
  }
  .inp {
    margin-top: 0;
  }
  p {
    color: #959595;
    height: 10px;
    text-align: right;
  }
  button {
    width: 330px;
    height: 36px;
    background-color: #5cad77;
    font-size: 16px;
    color: #fff;
    border: 1px solid;
    border-radius: 3px;
    cursor: pointer;
  }
}
.c-content input::placeholder {
  padding-left: 10px;
}
.right {
  position: absolute;
  top: 0px;
  left: 380px;
  width: 275px;
  height: 436px;
  background-image: url(https://fes.qyerstatic.com/FoLbAXJtwbB5SVORRmihPFWD-oYM);
  background-repeat: no-repeat;
  background-size: cover;
}
.logins {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  span {
    width: 40px;
    height: 40px;
  }
}
.logins .sp1 {
  background: url("https://fes.qyerstatic.com/FkHhVOT0BMK6LN3mOQ1qACNwKzlI");
  background-size: cover;
}
.logins .sp2 {
  background: url("https://fes.qyerstatic.com/FugnPbgTJd9eGwDRpbL4L-bEsZaZ");
  background-size: cover;
}
.logins .sp3 {
  background: url("https://fes.qyerstatic.com/FiMZfg-o4O6kGlKgQNBUEbLPY-0A");
  background-size: cover;
}
.logins .sp4 {
  background: url("https://fes.qyerstatic.com/FtOA3elXgqZZY7Oa16ZRZt8Jsvnn");
  background-size: cover;
}
.footer {
  width: 100%;
  margin-top: 10px;
  span {
    line-height: 20px;
    color: #959595;
    font-size: 14px;
  }
  a {
    color: #3f9f5f;
  }
  strong {
    font-weight: 500;
    color: #959595;
    font-size: 14px;
    float: right;
  }
}
</style>