<template>
  <div class="hello">
    <el-form class="loginform" ref="form" label-width="80px">
      <el-form-item label="用户名" required>
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.loginform {
  width: 400px;
  position: absolute;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
}
</style>

<script>
import { signIn, signOut } from "@/request";
export default {
  name: "hello",
  data() {
    return {
      username: "admin",
      password: ""
    };
  },
  mounted() {
    signOut();
  },
  methods: {
    login() {
      // this.$router.push("demopage");
      signIn({
        username: this.username,
        password: this.password
      }).then(d => {
        if (d.data.code != 401) {
          this.gotodemopage();
        }
      });
    },
    gotodemopage() {
      this.$router.push({
        path: "demopage",
        name: "demopagename",
        query: {
          username: this.username,
          password: this.password
        },
        params: { name: 666 }
      });
    }
  }
};
</script>