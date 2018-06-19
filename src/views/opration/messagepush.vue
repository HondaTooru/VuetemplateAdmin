<template>
  <div class="push">
    <div class="tip">
      <el-button icon="el-icon-plus" type="primary" @click.native="$router.push({ name: 'SendNewMsg'})">发送新消息</el-button>
    </div>
    <el-table :data="list" border>
      <el-table-column prop="templateName" label="模板名称"></el-table-column>
      <el-table-column prop="sendNums" label="发送数量"></el-table-column>
      <el-table-column prop="isInfos" label="是否有详情"></el-table-column>
      <el-table-column prop="sendState" label="发送状态">
        <template slot-scope="scope">
          <el-tag type="danger">{{scope.row.sendState}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="sendTime" label="发送时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'messagepush',
  data() {
    return {
      list: [
        { templateName: '测试', sendNums: 12, isInfos: '否', sendState: '确认', sendTime: '2022-22-22' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
