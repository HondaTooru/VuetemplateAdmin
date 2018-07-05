<template>
  <div class="createth">
    <el-form ref="submitForm" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="投标主题" prop="theme">
        <el-input v-model="form.theme"></el-input>
      </el-form-item>
      <el-form-item label="免费投票">
        <el-radio-group v-model="form.freeVote">
          <el-radio label="关闭免费投票"></el-radio>
          <el-radio label="开启免费投票"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="投票价格" prop="votePrice">
        <el-input v-model.number="form.votePrice"></el-input>
      </el-form-item>
      <el-form-item label="参与说明" prop="voteExplain">
        <el-input type="textarea" v-model="form.voteExplain"></el-input>
      </el-form-item>
      <el-form-item label="主题时间" prop="date">
        <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="用户报名">
        <el-radio-group v-model="form.sign">
          <el-radio label="开启"></el-radio>
          <el-radio label="关闭"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('submitForm')" :loading="loading">提交</el-button>
       </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'createth',
  data() {
    return {
      loading: false,
      form: {
        theme: '',
        freeVote: '',
        votePrice: '',
        voteExplain: '',
        date: '',
        sign: ''
      },
      rules: {
        theme: [
          { required: true, message: '请输入主题名称', tirgger: 'blur' }
        ],
        votePrice: [
          { required: true, message: '请输入价格', trigger: 'blur' },
          { type: 'number', message: '请输入合法价格' }
        ],
        voteExplain: [
          { required: true, message: '请输入参与说明', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请输入主题时间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit(formname) {
      this.loading = true
      this.$refs[formname].validate(valid => {
        if (valid) {
          this.loading = false
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1500
          })
        }
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
</style>
