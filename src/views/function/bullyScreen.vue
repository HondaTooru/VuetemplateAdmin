<template>
  <div class="bullyScreen">
    <el-form :model="form" label-position="right" label-width="100px">
      <el-form-item label="霸小视频">
        <el-switch v-model="form.video"></el-switch>
      </el-form-item>
      <el-form-item label="新运霸屏">
        <el-switch v-model="form.luck"></el-switch>
      </el-form-item>
    </el-form>
    <div class="tip">
      <p>霸屏信息列表</p>
    </div>
    <el-table :data="list" border>
      <el-table-column
      label="时间"
      >
        <template slot-scope="scope">
          <el-input v-model.number="scope.row.time"></el-input>
        </template>
      </el-table-column>
      <el-table-column
      label="价格"
      >
        <template slot-scope="scope">
          <el-input v-model.number="scope.row.price"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger"  @click.native.prevent="deleteRow(scope.row.$index, list)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-form style="margin-top: 20px">
      <el-form-item>
        <el-button type="primary" @click.native.prevent="saveDate">保存</el-button>
      </el-form-item>
    </el-form>
    <div class="tip" style="margin: 20px 0">
      <p>添加霸屏信息</p>
    </div>
    <el-table :data="add" border>
      <el-table-column label="时间">
        <template slot-scope="scope">
          <el-input v-model.number="scope.row.time"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          <el-input v-model.number="scope.row.price"></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="addItem">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'bullyscreen',
  data() {
    return {
      form: {
        video: true,
        luck: false
      },
      list: [
        { time: 10, price: 1000 },
        { time: 15, price: 500 },
        { time: 101, price: 100 },
        { time: 20, price: 25 }
      ],
      add: [
        { time: '', price: '' }
      ]
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    addItem() {
      this.list.push(this.add[0])
    },
    saveDate() {
      this.$message({
        message: '保存成功',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>

<style lang="scss">
</style>
