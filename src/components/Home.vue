<template>
  <div class="home_container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 侧边栏菜单区域 -->
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              text-color="#fff"
              :router="true">
            <!-- 一级菜单 -->
            <el-submenu :index="'activity'">
              <!-- 一级菜单模板区域 -->
              <template #title>
                <!-- 图标 -->
                <el-icon><location/></el-icon>
                <!-- 文本 -->
                <span>CP活动</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item :index="'/users'">
                <!-- 二级菜单模板区域 -->
                <template #title>
                  <!-- 图标 -->
                  <el-icon><document/></el-icon>
                  <!-- 文本 -->
                  <span>所有用户</span>
                </template>
              </el-menu-item>
              <el-menu-item :index="'/posts'">
                <template #title>
                  <el-icon><document/></el-icon>
                  <span>CP日常</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <!-- 一级菜单 -->
            <el-submenu :index="'/my'">
              <!-- 一级菜单模板区域 -->
              <template #title>
                <!-- 图标 -->
                <el-icon><location/></el-icon>
                <!-- 文本 -->
                <span>我的CP</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item :index="'/cp'">
                <!-- 二级菜单模板区域 -->
                <template #title>
                  <!-- 图标 -->
                  <el-icon><document/></el-icon>
                  <!-- 文本 -->
                  <span>我的CP</span>
                </template>
              </el-menu-item>
              <el-menu-item :index="'/information'">
                <!-- 二级菜单模板区域 -->
                <template #title>
                  <!-- 图标 -->
                  <el-icon><document/></el-icon>
                  <!-- 文本 -->
                  <span>个人信息</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import {Document} from "@element-plus/icons";
export default {
  name: "Home",
  components: {Document}
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;

  .el-container {
    height: 100%;
    margin-bottom: 40px;
  }

  .el-header {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  //.el-main {
  //  background-color: #e9eef3;
  //  color: var(--el-text-color-primary);
  //  text-align: center;
  //  line-height: 160px;
  //}

}
</style>