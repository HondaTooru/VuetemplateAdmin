<template>
  <div class="sendnewmsg">
    <div class="tip">
      <p>当前粉丝数量：1</p>
    </div>
    <el-form label-position="right" label-width="100px" :model="newmsg" :rules="rules">
      <el-form-item label="选择模板">
        <el-select v-model="newmsg.model" placeholder="请选择">
          <el-option v-for="m in options" :key="m.value" :label="m.label" :value="m.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="店铺名">
        <el-input v-model="newmsg.shopName"></el-input>
      </el-form-item>
      <el-form-item label="活动标题">
        <el-input v-model="newmsg.activeName"></el-input>
      </el-form-item>
      <el-form-item label="活动内容">
        <el-input v-model="newmsg.activeContent"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-input v-model="newmsg.activeTime"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="newmsg.activeRemark"></el-input>
      </el-form-item>
      <el-form-item label="详情页网址">
        <el-input v-model="newmsg.activeUrl"></el-input>
      </el-form-item>
      <el-form-item>
        <el-alert type="error" title="选填，填写具体活动的微信文章地址"></el-alert>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'sendnewmsg',
  data() {
    return {
      newmsg: {
        model: '',
        shopName: '',
        activeName: '',
        activeContent: '',
        activeTime: '',
        activeRemark: '',
        activeUrl: ''
      },
      rules: {
        model: [
          {}
        ]
      },
      options: [
        { value: '选项1', label: '黄金蛋糕' },
        { value: '选项2', label: '黄金蛋糕' },
        { value: '选项3', label: '黄金蛋糕' },
        { value: '选项4', label: '黄金蛋糕' },
        { value: '选项5', label: '黄金蛋糕' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
