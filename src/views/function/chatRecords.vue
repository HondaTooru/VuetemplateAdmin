<template>
  <div class="userlist">
    <el-table border :data="list">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column prop="nickName" label="昵称"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sex ? '' : 'danger'">{{ scope.row.sex ? '男' : '女' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="头像"></el-table-column>
      <el-table-column prop="userGroup" label="用户在"></el-table-column>
      <el-table-column prop="consumptionType" label="消费类型"></el-table-column>
      <el-table-column prop="specialTime" label="特效时长"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="snedTime" label="发送时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click.native.prevent="deleteRow(scope.row.$index, list)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="list.length"
      :page-size="2"
      style="margin-top: 20px;text-align:right;"
      >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'userslist',
  data() {
    return {
      list: [
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '苏嬷嬷', sex: 0, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '张三', sex: 0, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', consumptionType: '礼物', specialTime: '60', content: '内容', snedTime: '2018-6-16' }
      ]
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
</style>
