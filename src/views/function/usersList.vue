<template>
  <div class="userlist">
    <el-table border :data="list">
      <el-table-column prop="nickName" label="昵称"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sex ? '' : 'danger'">{{ scope.row.sex ? '男' : '女' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="头像"></el-table-column>
      <el-table-column prop="cityName" label="城市"></el-table-column>
      <el-table-column prop="userGroup" label="用户组"></el-table-column>
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
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', cityName: '成都' },
        { nickName: '李四', sex: 0, avatar: '', userGroup: '管理人员', cityName: '成都' },
        { nickName: '二狗子', sex: 1, avatar: '', userGroup: '管理人员', cityName: '成都' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', cityName: '成都' },
        { nickName: '云天河', sex: 1, avatar: '', userGroup: '管理人员', cityName: '成都' }
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
