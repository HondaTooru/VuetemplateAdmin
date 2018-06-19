<template>
  <div class="inviter">
    <el-table :data="list" border>
      <el-table-column prop="id" label="艺人ID"></el-table-column>
      <el-table-column prop="actorName" label="艺名"></el-table-column>
      <el-table-column prop="actorType" label="艺人类型"></el-table-column>
      <el-table-column prop="actorAvatar" label="头像"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click.native="onDelete(scope.$index, list)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'inviter',
  data() {
    return {
      list: [
        { id: 1, actorName: '陆无名', actorType: '歌手', actorAvatar: '' }
      ]
    }
  },
  methods: {
    onDelete(index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
</style>
