<template>
  <div class="margin">
    <el-table border :data="list">
      <el-table-column label="道具名称" prop="name"></el-table-column>
      <el-table-column label="系统价格（单位：元）" prop="price"></el-table-column>
      <el-table-column label="自定义价格（单位：元）">
        <template slot-scope="scope">
          <el-input v-model.number="scope.row.resetPrice"></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'magicset',
  data() {
    return {
      list: [
        { name: '小猪佩奇', price: 25.0, resetPrice: 25.0 },
        { name: '虎粮', price: 25.0, resetPrice: 25.0 },
        { name: '飞毯', price: 25.0, resetPrice: 25.0 },
        { name: '猫头鹰', price: 25.0, resetPrice: 25.0 },
        { name: '汽车', price: 25.0, resetPrice: 25.0 }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
