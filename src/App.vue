<template>
  <div id="app">
    <div class="showvuex">
      <el-tag type="success">Vuex</el-tag>
      <br/>
      {{getTestData}}
      <br/>
      {{getUesrInfo}}
      <br/>
      {{getUesrName}}
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  computed: {
    ...mapGetters(["getTestData", "getUesrInfo", "getUesrName"])
  }
};
</script>
<style>
.showvuex {
  margin-bottom: 15px;
}
</style>

