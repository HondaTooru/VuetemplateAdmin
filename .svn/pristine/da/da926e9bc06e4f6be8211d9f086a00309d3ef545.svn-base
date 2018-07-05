<template>
  <el-form :from="form" label-position="right" label-width="100px">
    <el-form-item label="聊天室URL">
      <el-input v-model="form.url">
        <template slot="prepend">Http://</template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-clipboard:copy='form.url' v-clipboard:success="clipboard">复制</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import clipboard from '@/directive/clipboard'

export default {
  name: 'wechat',
  data() {
    return {
      form: {
        url: 'www.baidu.com'
      }
    }
  },
  directives: {
    clipboard
  },
  methods: {
    clipboard() {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style lang="scss">
</style>
