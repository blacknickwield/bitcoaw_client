<template>
  个人信息
  <div class="demo-image">
    <input type="file" @change="getImageFile" id="img">
      <el-image
          style="width: 100px; height: 100px"
          :src="imageUrl"
          :fit="fit"
      ></el-image>
    <el-row>
      <el-form-item class="buttons">
        <el-button type="primary" @click="select">选择</el-button>
        <el-button type="info">上传</el-button>
      </el-form-item>
    </el-row>
  </div>
  <div>
    <el-row>
      <el-col
          v-for="(o, index) in 2"
          :key="o"
          :span="8"
          :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
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
      currentDate: Date()
    }
  },
  methods: {
    select() {
      console.log("select");
    },
    getImageFile(e) {
      let _this = this
      var files = e.target.files[0]
      if (!e || !window.FileReader) return  // 判断是否支持FileReader
      let reader = new FileReader()
      reader.readAsDataURL(files) // 文件转换
      reader.onloadend = function () {
        _this.imageUrl = this.result
      }

    }
  }
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