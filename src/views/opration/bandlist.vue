<template>
  <div class="bandlist">
    <div class="tip">
      <el-button icon="el-icon-plus" type="primary" @click.native="$router.push({ name: 'AddBand' })">新增乐队</el-button>
    </div>
    <el-table :data="list" border>
      <el-table-column prop="id" label="乐队ID"></el-table-column>
      <el-table-column prop="bandName" label="乐队名称"></el-table-column>
      <el-table-column prop="price" label="歌曲默认价格"></el-table-column>
      <el-table-column prop="parcenter" label="分成比例"></el-table-column>
      <el-table-column prop="createDate" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary">修改分成比例</el-button>
            <el-button type="warning">编辑</el-button>
            <el-button type="danger">删除乐队</el-button>
          </el-button-group>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'bandlist',
  data() {
    return {
      list: [
        { id: 1, bandName: '花儿乐队', price: '1200', parcenter: '2%', createDate: '2019-11-11' }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
