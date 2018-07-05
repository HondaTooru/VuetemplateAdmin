<template>
  <div class="gift">
    <el-table :data="list" border v-loading="loading">
      <el-table-column
        prop="giftName"
        label="道具名称"
      ></el-table-column>
      <el-table-column
      prop="defaultPrice"
      label="系统价格（单位：元）"
      >
      </el-table-column>
      <el-table-column
        label="自定义价格（单位：元）"
        >
        <template slot-scope="scope">
            <el-input v-if="scope.row.edit" v-model="scope.row.setPrice" prefix-icon="el-icon-edit"></el-input>
           <template v-else>
           {{ scope.row.setPrice }}
         </template>
        </template>
      </el-table-column>
      <el-table-column label="是否开启">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.isOpen" inactive-color="#ff4949" :disabled="!scope.row.edit"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-button icon="el-icon-refresh" type="warning" @click.native.stop="cancelEdit(scope.row)">取消</el-button>
            <el-button icon="el-icon-circle-check-outline" type="success" @click.native.stop="confirmEdit(scope.row)">保存</el-button>
          </template>
          <el-button v-else type="primary" icon="el-icon-edit" @click.native.stop="scope.row.edit = !scope.row.edit">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { GiftList } from '@/api/giftset'

export default {
  name: 'giftset',
  data() {
    return {
      loading: false,
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      GiftList().then(res => {
        console.log(res)
        this.loading = false
        this.list = res.data.list.map(item => {
          this.$set(item, 'edit', false)
          item.original = item.setPrice
          item.originalState = item.isOpen
          return item
        })
      }).catch(err => {
        this.loading = false
        return err
      })
    },
    confirmEdit(item) {
      item.original = item.setPrice
      item.originalState = item.isOpen
      item.edit = false
      this.$message({
        message: '修改成功',
        type: 'success',
        duration: 2000
      })
    },
    cancelEdit(item) {
      item.edit = false
      item.setPrice = item.original
      item.isOpen = item.originalState
      this.$message({
        message: '您取消了修改',
        type: 'warning',
        duration: 2000
      })
    }
  }
}
</script>

<style lang="scss">
</style>
