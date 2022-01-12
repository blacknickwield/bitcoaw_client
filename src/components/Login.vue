<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="form" :rules="rules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input v-model="form.schoolId" prefix-icon="iconfont icon-yonghu"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="form.password" prefix-icon="iconfont icon-mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-row>
          <el-form-item class="buttons">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info">重置</el-button>
          </el-form-item>
        </el-row>

      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        schoolId: '1120193177',
        password: 'gjf'
      },
      rules: {
        schoolId: [
          {required: true, message: '请输入学号', trigger: 'blur'},
          { min: 10, max: 10, message: "学号为10位", trigger: 'blue'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          { min: 1, message: "密码不为空", trigger: 'blue'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log("submit");
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        this.$message.success("登录成功");
        const {data: result} = await this.$http.post('/user/login?schoolId='+this.form.schoolId + '&password=' + this.form.password);
        console.log('/user/login?schoolId='+this.form.schoolId + '&password=' + this.form.password);
        console.log(result);
        this.$store.state.userInfo = result.data.userInfo
        this.$store.state.token = result.data.token
        window.sessionStorage.setItem("token", result.data.token)
        console.log(result.data.token)
        await this.$router.push('home');
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login_container {
    height: 100%;
    background-color: hotpink;
  }

  .login_box {
    width: 450px;
    height: 300px;
    background-color: azure;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avatar_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }


</style>