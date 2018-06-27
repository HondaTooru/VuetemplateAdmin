<template>
  <div class="update">
    <el-form :model="form">
      <el-form-item label="密码">
        <el-input type="password" v-model="form.oldpass"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input type="password" v-model="form.newpass"></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input type="password" v-model="form.confirmpass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'accountpwd',
  data() {
    return {
      form: {
        oldpass: '',
        newpass: '',
        confirmpass: ''
      }
    }
  }
}
</script>

<style lang="scss">
</style>
