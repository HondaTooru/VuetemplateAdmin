<template>
  <el-form ref="swiper" :model="form" :rule="rules" label-position="right" label-width="120px">
    <el-form-item label="轮播状态">
      <el-switch v-model="form.isOpen"></el-switch>
    </el-form-item>
    <el-form-item label="聊天显示时间">
      <el-input v-model="form.duration"></el-input>
    </el-form-item>
    <el-form-item>
      <el-alert
        :closable="false"
        title="0秒表示关闭,最小时间为30秒"
        type="error">
      </el-alert>
    </el-form-item>
    <el-form-item label="土豪邦显示时间">
      <el-input v-model="form.tuhao"></el-input>
    </el-form-item>
    <el-form-item>
      <el-alert
        :closable="false"
        title="今日土豪榜至少一位用户,组件才生效"
        type="error">
      </el-alert>
    </el-form-item>
    <el-form-item label="点歌显示时间">
      <el-input v-model="form.songTime"></el-input>
    </el-form-item>
    <el-form-item>
      <el-alert
        :closable="false"
        title="点歌有歌曲,组件才生效"
        type="error">
      </el-alert>
    </el-form-item>
    <el-form-item label="投票显示时间">
      <el-input v-model="form.voteTime"></el-input>
    </el-form-item>
    <el-form-item>
      <el-alert
        :closable="false"
        title="至少有一个在进行中的投票活动,组件才生效"
        type="error">
      </el-alert>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('swiper')" :loading="loading">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'swiper',
  data() {
    return {
      loading: false,
      form: {
        isOpne: true,
        duration: 300,
        tuhao: 30,
        songTime: 20,
        voteTime: 20
      },
      rules: [
      ]
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
