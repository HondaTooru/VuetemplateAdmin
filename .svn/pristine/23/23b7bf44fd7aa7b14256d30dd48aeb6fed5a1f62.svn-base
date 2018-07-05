<template>
  <el-form :model="form" label-width="125px" label-position="right" ref="set">
    <el-form-item label="点歌功能">
      <el-switch v-model="form.isOpen"></el-switch>
    </el-form-item>
    <el-form-item label="允许点歌时间">
      <el-time-picker
        v-model="form.rangeDate1"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点">
      </el-time-picker>
      <el-time-picker
        arrow-control
        v-model="form.rangeDate2"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点">
      </el-time-picker>
    </el-form-item>
    <el-form-item label="当晚点歌数量限制">
      <el-input-number v-model="form.Nums" :min="1" :max="10" label="点歌限制"></el-input-number>
    </el-form-item>
    <el-form-item label="允许重复点歌">
      <el-switch v-model="form.isRepeat"></el-switch>
    </el-form-item>
    <el-form-item label="点歌消息接收者">
      苏小小
      <el-popover
          placement="right"
          width="400"
          v-model="visible"
          trigger="click">
          <el-table :data="gridData">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column property="avatar" label="头像"></el-table-column>
            <el-table-column property="nickname" label="昵称"></el-table-column>
          </el-table>
          <el-alert
            :closable="false"
            style="margin: 15px 0"
            title="需管理员关注公众号，最多选择5位"
            type="error">
          </el-alert>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" @click="visible = false">确定</el-button>
          </div>
          <el-button slot="reference">设置</el-button>
      </el-popover>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('set')" :loading="loading">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'dapsong',
  data() {
    return {
      loading: false,
      visible: false,
      form: {
        isOpen: false,
        rangeDate1: '',
        rangeDate2: '',
        Nums: 10,
        isRepeat: false,
        receiver: ''
      },
      gridData: [{
        avatar: '2016-05-02',
        nickname: '王小虎'
      }]
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
