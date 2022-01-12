<template>
  <el-row>

    <el-card :body-style="{ padding: '0px' }">
      <el-image
          :src="userImg"
          class="image"
          fit="contain"
          style="width: 300px; height: 300px"
      ></el-image>
      <div style="padding: 14px">
        <span>Yummy hamburger</span>
        <p>昵称: {{userInfo.username}}</p>
        <p>学号: {{userInfo.schoolId}}</p>
        <p>自我介绍: {{userInfo.description}}</p>
        <div class="bottom">
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>


    <el-card :body-style="{ padding: '0px' }">
      <el-image
          :src="coupleUserImg"
          class="image"
          fit="contain"
          style="width: 300px; height: 300px"
      ></el-image>
      <div style="padding: 14px">
        <span>Yummy hamburger</span>
        <p>昵称: {{coupleUserinfo.username}}</p>
        <p>学号: {{coupleUserinfo.schoolId}}</p>
        <p>自我介绍: {{coupleUserinfo.description}}</p>
        <div class="bottom">
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </el-row>
</template>


<script>
// import {Position} from "_@element-plus_icons-vue@0.2.4@@element-plus/icons-vue";
export default {
  name: "Couple",

  created() {
    this.userInfo = this.$store.state.userInfo
    this.user
    this.$http.get('/couple/myOngoing?id=' + this.userInfo.id).then(async (res) => {
      // console.log(res);
      // 首先获取CP的信息
      this.couple = res.data.data.couple;
      console.log("ahfkagfeakf")
      console.log(this.couple)
      let coupleUserId;
      // 从CP的信息中获取对方id
      if (this.couple.maleId === this.userInfo.id) {
        coupleUserId = this.couple.femaleId;
      } else {
        coupleUserId = this.couple.maleId;
      }
      console.log(coupleUserId);

      // 获取自己头像
      const {data: userUrl} = await this.$http.get('image/download', {
        params: {
          fileName: this.userInfo.imgUrl,
        },
        responseType: "arraybuffer",
      });
      this.userImg = 'data:image/png;base64,' + btoa(
          new Uint8Array(userUrl).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      // 根据对方id获取对方信息
      this.$http.get('/user/query?id=' + coupleUserId).then(async (userRes) => {
        console.log(userRes);
        this.coupleUserinfo = userRes.data.data.userInfo;
        console.log(this.coupleUserinfo);

        // 获取对方头像
        const {data: coupleUserUrl} = await this.$http.get('image/download', {
          params: {
            fileName: this.coupleUserinfo.imgUrl,
          },
          responseType: "arraybuffer",
        });

        this.coupleUserImg = 'data:image/png;base64,' + btoa(
            new Uint8Array(coupleUserUrl).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
      }).catch((userErr) => {
        console.log(userErr);
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  data() {
    return {
      couple: {},
      userInfo: {},
      userImg: '',
      coupleUserinfo: {},
      coupleUserImg: '',
    }
  },
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>