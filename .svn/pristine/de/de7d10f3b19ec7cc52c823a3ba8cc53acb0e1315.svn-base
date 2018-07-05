<template>
<el-form :model="feedback" :rules="rules" ref="feedback">
  <el-form-item label="联系电话" prop="tel">
    <el-input v-model.number="feedback.tel"></el-input>
  </el-form-item>
  <el-form-item label="留言类容" prop="content">
    <el-input type="textarea" v-model="feedback.content"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button :loading="loading" type="primary" @click="handleSubmit" v-waves>提交</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import waves from '@/directive/waves'
import { feedback } from '@/api/userlist'

export default {
  name: 'feedback',
  data() {
    return {
      loading: false,
      feedback: {
        tel: '',
        content: ''
      },
      rules: {
        tel: [
          { type: 'number', required: true, message: '请输入电话', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  directives: {
    waves
  },
  methods: {
    handleSubmit() {
      this.$refs['feedback'].validate(valid => {
        if (valid) {
          this.loading = true
          feedback(this.feedback).then(res => {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 2000
            })
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
</style>
