<template>
  <div class="actorlist">
    <el-table :data="list" border>
      <el-table-column prop="id" label="艺人ID"></el-table-column>
      <el-table-column prop="actorName" label="艺名"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sex ? '' : 'warning'">{{scope.row.sex ? '男' : '女'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="真实姓名" prop="realName"></el-table-column>
      <el-table-column label="艺人类型" prop="actorType"></el-table-column>
      <el-table-column label="加入时间" prop="joinDate"></el-table-column>
      <el-table-column label="礼物分成比例" prop="giftPracent"></el-table-column>
      <el-table-column label="收入列表" prop="incharge"></el-table-column>
      <el-table-column label="礼物总金额" prop="giftTotal"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'actorlist',
  data() {
    return {
      list: [
        { id: 1, actorName: '无名', sex: 1, realName: '花落去', actorType: '歌手', joinDate: '2018-11-11', giftPracent: '1%', incharge: 1000, giftTotal: 1200 }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
