<template>
  <el-card>
    <el-table :data="userList">
      <el-table-column type="index"></el-table-column>
      <el-table-column label="姓名" prop="username"></el-table-column>
            <el-table-column label="头像">
              <template v-slot="scope">
                <img :src="scope.row.url" width="40" height="40" class="head_pic"/>
              </template>
            </el-table-column>
<!--      <el-table-column label="头像">-->
<!--        <img :src="url" width="40"-->
<!--             height="40" class="head_pic"/>-->
<!--        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" width="40"-->
<!--             height="40" class="head_pic"/>-->

<!--      </el-table-column>-->
      <el-table-column label="性别" prop="male"></el-table-column>
      <el-table-column label="自我介绍" prop="description"></el-table-column>
      <el-table-column label="发送CP邀请">
        <template v-slot="scope">
          <el-button type="primary" v-model="scope.row.id" @click="sendCPRequest(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-dialog
      v-model="dialogVisible"
      title="发送CP请求"
      width="50%"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >确定</el-button>
      </span>
    </template>
  </el-dialog>
<!--  <img :src="url" width="40"-->
<!--       height="40" class="head_pic"/>-->
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
      url: "",
      dialogVisible: false,
    }
  },
  methods: {
    getUserList() {
      console.log(3333)
      this.$http.get('/user/all').then(async res => {
        console.log(111)
        // console.log(res.data);
        // this.userList = res.data.data.userInfos;


        for (const item of res.data.data.userInfos) {
          const {data: url} = await this.$http.get('image/download', {
            params: {
              fileName: item.imgUrl,
            },
            responseType: "arraybuffer",
          });
          item.url = 'data:image/png;base64,' + btoa(
              new Uint8Array(url).reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          this.userList.push(item)
          this.url = item.url
        }
        // res.data.data.userInfos.forEach(e => {
        //   const fileName = e.imgUrl
        //
        //   this.$http.get('image/download', {
        //     params: {
        //       fileName: fileName,
        //     },
        //     responseType: "arraybuffer",
        //   }).then(res => {
        //     e.url = 'data:image/png;base64,' + btoa(
        //         new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        //     );
        //
        //     this.userList.push(e)
        //   }).catch(err => {
        //     console.log(err)
        //   })

        // })
        console.log(this.userList.length)
        this.userList.forEach(e => {
          console.log(e)
        })
      }).catch(err => {
        console.log(err);
      })

    },
    sendCPRequest(id) {
      console.log(id);
      this.dialogVisible = true;
      let other = this.userList.find((e) => e.id === id);
      console.log(other.username);
    },
  }
}
</script>

<style scoped>

</style>