<template>
  <el-form :model="form" label-position="right" label-width="150px">
    <el-form-item label="聊天室公告">
      <el-input v-model="form.notice"></el-input>
    </el-form-item>
    <el-form-item label="排行榜统计道具免费">
      <el-switch v-model="form.isFreeProp"></el-switch>
    </el-form-item>
    <el-form-item label="开启手机霸屏">
      <el-switch v-model="form.isPhonePicture"></el-switch>
    </el-form-item>
    <el-form-item label="开启手机发图">
      <el-switch v-model="form.isBully"></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click.native="save">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'chatroom',
  data() {
    return {
      form: {
        notice: '欢迎光临',
        isBully: true,
        isPhonePicture: true,
        isFreeProp: true
      }
    }
  },
  methods: {
    save() {
      this.$message({
        message: '保存成功',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style lang="scss">
</style>
