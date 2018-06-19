<template>
  <div class="gift">
    <el-table :data="list" border>
      <el-table-column
        prop="name"
        label="道具名称"
      ></el-table-column>
      <el-table-column
      prop="price"
      label="系统价格（单位：元）"
      >
      </el-table-column>
      <el-table-column
        label="自定义价格（单位：元）"
        >
        <template slot-scope="scope">
          <el-input v-model="scope.row.resetPrice"></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-switch v-model="scope.row.isOpen"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'giftset',
  data() {
    return {
      list: [
        { name: '小猪佩奇', price: 25.0, resetPrice: 25.0, isOpen: true },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false },
        { name: '魔法棒', price: 25.0, resetPrice: 25.0, isOpen: false }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
