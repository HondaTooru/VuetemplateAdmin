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
    <el-table :data="list" border v-loading="loading">
      <el-table-column
      label="时间"
      >
        <template slot-scope="scope">
         <template v-if="scope.row.edit">
            <el-input prefix-icon="el-icon-edit" v-model.number="scope.row.time"></el-input>
         </template>
         <span v-else>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
      label="价格"
      >
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input prefix-icon="el-icon-edit" v-model.number="scope.row.price"></el-input>
          </template>
          <span v-else>{{ scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <template v-if="scope.row.edit">
              <el-button type="warning" icon="el-icon-refresh" @click.native.prevent="cancelEdit(scope.row)">取消</el-button>
              <el-button type="success" icon="el-icon-circle-check-outline" @click.native.prevent="confirmEdit(scope.row)">保存</el-button>
            </template>
            <template v-else>
              <el-button type="primary" icon="el-icon-edit" @click.native.prevent="scope.row.edit = !scope.row.edit">编辑</el-button>
              <el-button type="danger" icon="el-icon-remove-outline" @click.native.prevent="deleteRow(scope.row.$index, list)">删除</el-button>
            </template>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
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
          <el-button type="primary" @click.native.prevent="addItem" icon="el-icon-circle-plus-outline">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/bullyScreen'

export default {
  name: 'bullyscreen',
  data() {
    return {
      loading: true,
      form: {
        video: true,
        luck: false
      },
      list: [],
      add: [
        { time: '', price: '' }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    addItem() {
      if ((this.add[0].time).toString().trim() && (this.add[0].price).toString().trim()) {
        this.list.push(this.add[0])
        this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success',
          duration: 2000
        })
      } else {
        this.$message({
          message: '请把信息输入完整',
          type: 'warning',
          duration: 2000
        })
      }
    },
    getList() {
      this.loading = true
      fetchList().then(res => {
        console.log(res.data.list)
        this.loading = false
        this.list = res.data.list.map(item => {
          this.$set(item, 'edit', false)
          item.originalTime = item.time
          item.originalPrice = item.price
          return item
        })
      }).catch(err => {
        this.loading = false
        return err
      })
    },
    cancelEdit(row) {
      row.time = row.originalTime
      row.price = row.originalPrice
      row.edit = !row.edit
      this.$message({
        message: '您已经取消了',
        type: 'warning',
        duration: 2000
      })
    },
    confirmEdit(row) {
      row.originalTime = row.time
      row.originalPrice = row.price
      row.edit = !row.edit
      this.$message({
        message: '修改成功',
        type: 'success',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="scss">
</style>
