<template>
  <el-card>
    <el-table :data="userList">
      <el-table-column type="index"></el-table-column>
      <el-table-column label="姓名" prop="username"></el-table-column>
      <el-table-column label="性别" prop="male"></el-table-column>
      <el-table-column label="自我介绍" prop="description"></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "Users",
  created() {
    this.getUserList()
  },
  data() {
    return {
      userList: [],
    }
  },
  methods: {
    async getUserList() {
      const { data: result } = await this.$http.get('/user/all');
      console.log(result)
      this.userList = result.data.userInfos
    }
  }
}
</script>

<style scoped>

</style>