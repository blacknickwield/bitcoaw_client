<template>
  <!--  个人信息-->
  <!--  <div class="demo-image">-->
  <!--    <input type="file" @change="getImageFile" id="img">-->
  <!--    <el-image-->
  <!--        style="width: 100px; height: 100px"-->
  <!--        :src="imageUrl"-->
  <!--        :fit="fit"-->
  <!--    ></el-image>-->
  <!--    <el-row>-->
  <!--      <el-form-item class="buttons">-->
  <!--        <el-button type="primary" @click="select">选择</el-button>-->
  <!--        <el-button type="info">上传</el-button>-->
  <!--      </el-form-item>-->
  <!--    </el-row>-->
  <!--  </div>-->
  <div>
    <el-row>
      <el-card :body-style="{ padding: '0px', height: '800px', width: '500px', margin: 'auto'}" class="image">
        <el-image
            :src="userImg"
            class="image"
            fit="contain"
            style="width: 200px; height: 200px"
        ></el-image>
        <div>
          <p>昵称: {{ userInfo.username }}</p>
          <p>学号: {{ userInfo.schoolId }}</p>
          <p>自我介绍: {{ userInfo.description }}</p>
        </div>
      </el-card>
    </el-row>
  </div>
</template>


<script>
export default {
  name: "Information",
  data() {
    return {
      imageUrl: "",
      fit: "fill",
      currentDate: Date(),
      userInfo: {},
      userImg: ''
    }
  },
  created() {
    console.log(this.$store.state.userInfo);
    console.log(this.$store.state.token);
    this.userInfo = this.$store.state.userInfo;
    this.$http.get('image/download', {
      params: {
        fileName: this.userInfo.imgUrl,
      },
      responseType: "arraybuffer",
    }).then((res) => {
      this.userImg = 'data:image/png;base64,' + btoa(
          new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
    }).catch((err) => {
      console.log(err);
    })
  },
  methods: {
    select() {
      console.log("select");
    },
    getImageFile(e) {
      // let _this = this
      var files = e.target.files[0]
      this.imageUrl = window.URL.createObjectURL(files)
      // if (!e || !window.FileReader) return  // 判断是否支持FileReader
      // let reader = new FileReader()
      // reader.readAsDataURL(files) // 文件转换
      // reader.onloadend = function () {
      //   _this.imageUrl = this.result
      // }

    }
  }
}
</script>

<style scoped>
.image {
  margin: auto;
  width: 50px;
}
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

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>