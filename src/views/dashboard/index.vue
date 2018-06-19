<template>
  <div class="dashboard">
    <div class="tip">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :xl="12" :lg="12"><p>欢迎您登录商户管理后台!</p></el-col>
        <el-col :xs="24" :sm="24" :md="12" :xl="12" :lg="12" style="text-align:right;">
          <el-button type="primary">登录大屏幕</el-button>
          <el-button type="success" v-clipboard:copy='inputData' v-clipboard:success="clipboardSuccess">复制大屏幕链接</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="list">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="4" :xl="4" :lg="4">
          <div class="icon icon-1"><svg-icon icon-class="toupiao"></svg-icon></div>
          <div class="tit">投票</div>
          <div class="set"><el-button type="primary" @click.native.prevent="$router.push({name: 'Vote'})">设置</el-button></div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :xl="4" :lg="4">
          <div class="icon icon-2"><svg-icon icon-class="bahe"></svg-icon></div>
          <div class="tit">拔河</div>
          <div class="set"><el-button type="primary">设置</el-button></div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :xl="4" :lg="4">
          <div class="icon icon-3"><svg-icon icon-class="saiche"></svg-icon></div>
          <div class="tit">赛车</div>
          <div class="set"><el-button type="primary" @click.native.prevent="$router.push({name: 'Car'})">设置</el-button></div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :xl="4" :lg="4">
          <div class="icon icon-4"><svg-icon icon-class="saima"></svg-icon></div>
          <div class="tit">赛马</div>
          <div class="set"><el-button type="primary" @click.native.prevent="$router.push({name: 'Horse'})">设置</el-button></div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :xl="4" :lg="4">
          <div class="icon icon-5"><svg-icon icon-class="yaoyi"></svg-icon></div>
          <div class="tit">摇一摇</div>
          <div class="set"><el-button type="primary" @click.native.prevent="$router.push({name: 'Shake'})">设置</el-button></div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :xl="4" :lg="4">
          <div class="icon icon-6"><svg-icon icon-class="shuqian"></svg-icon></div>
          <div class="tit">数钱</div>
          <div class="set"><el-button type="primary" @click.native.prevent="$router.push({name: 'Money'})">设置</el-button></div>
        </el-col>
        <el-col :xs="12" :sm="8" :md="4" :xl="4" :lg="4">
          <div class="icon icon-7"><svg-icon icon-class="songs"></svg-icon></div>
          <div class="tit">点歌</div>
          <div class="set"><el-button type="primary" @click.native.prevent="$router.push({name: 'DapSong'})">设置</el-button></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import clipboard from '@/directive/clipboard/index.js'

export default {
  name: 'dashboard',
  directives: {
    clipboard
  },
  data() {
    return {
      inputData: 'www.baidu.com'
    }
  },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  svg {
    width: 80px;
    height: 80px;
    padding: 15px;
    box-sizing: border-box;
  }
  .list {
    text-align: center;
    .icon {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 50%;
      margin: 0 auto;
      &.icon-1 {
        color: #cb98f6;
        background:#edd9ff;
      }
      &.icon-2 {
        color: #f56c6c;
        background: #f3c6c6;
      }
      &.icon-3 {
        color: #303133;
        background: #d0d0d0;
      }
      &.icon-4 {
        color: #095a6d;
        background: #095a6d61;
      }
      &.icon-5 {
        color: #f56c6c;
        background: #f3c6c6;
      }
      &.icon-6 {
        color: #af345b;
        background: #af345b12;
      }
      &.icon-7 {
        color: #e03df9;
        background: #e03df930;
      }
    }
    .tit {font-size: 14px;padding: 10px 0}
    .set {margin-bottom: 20px;}
  }
}
</style>
