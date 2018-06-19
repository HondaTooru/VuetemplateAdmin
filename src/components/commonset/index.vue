<template>
  <div class="commonset">
    <el-form ref="set" :model="form" :rules="rules" label-width="100px" label-position="right">
      <el-form-item label="是否开启">
        <el-switch v-model="form.isOn"></el-switch>
      </el-form-item>
      <el-form-item label="预赛时长" prop="preliminaryDuration">
        <el-input v-model.number="form.preliminaryDuration" placeholder="填选范围15秒-75秒"></el-input>
      </el-form-item>
      <el-form-item label="决赛时长" prop="finalDuration">
        <el-input v-model.number="form.finalDuration"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('set')" :loading="loading">提交</el-button>
      </el-form-item>
    </el-form>
    <div class="tip">
      <p>比赛记录</p>
    </div>
    <el-table
    :data="list"
    border
    empth-text="暂无数据"
    style="width:100%"
    >
    <el-table-column prop="fixture" label="比赛时间"></el-table-column>
    <el-table-column prop="people" label="参与人数"></el-table-column>
    <el-table-column prop="ranking" label="名次"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'commonset',
  data() {
    return {
      loading: false,
      list: [
        { fixture: '2018-6-14', people: 2, ranking: 1 },
        { fixture: '2018-6-14', people: 3, ranking: 1 }
      ],
      form: {
        isOn: false,
        preliminaryDuration: 15,
        finalDuration: 15
      },
      rules: {
        preliminaryDuration: [
          { required: true, message: '请输入预赛时长', trigger: 'blur' },
          { type: 'number', message: '请输入数字' }
        ],
        finalDuration: [
          { required: true, message: '请输入决赛时长' },
          { type: 'number', message: '请输入数字' }
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
