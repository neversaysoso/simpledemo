<template>
  <div class="simpledemo">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          route.params: {{$route.params.name}}
          <br/>
          route.query: username:{{$route.query.username}},password:{{$route.query.password}}
          <br/>
          666
          <br/>
          <el-form class="loginform" ref="form" style="width:200px;">
            <el-form-item label="名字">
              <el-input v-model="realname"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="changename">修改名字</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getlist">发起请求</el-button>
            </el-form-item>
          </el-form>
          <div v-for="i in hospitalList">
            {{i}}
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  line-height: 30px;
  padding: 15px;
}
</style>
<script>
import { getHospitalList } from "@/request";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      realname: "",
      hospitalList: []
    };
  },
  methods: {
    ...mapActions(["changeUserName"]),
    changename() {
      this.changeUserName(this.realname);
    },
    getlist() {
      getHospitalList().then(d => {
        console.log(d);
        this.hospitalList = d.data.content;
      });
    }
  }
};
</script>


