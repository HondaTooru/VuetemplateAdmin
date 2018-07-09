<template>
  <div class="gift">
    <el-table :data="list" border v-loading="loading">
      <el-table-column
        prop="gift_name"
        label="道具名称"
      ></el-table-column>
      <el-table-column
      prop="default_price"
      label="系统价格（单位：元）"
      >
      </el-table-column>
      <el-table-column
        label="自定义价格（单位：元）"
        >
        <template slot-scope="scope">
            <el-input v-if="scope.row.edit" v-model="scope.row.design_price" prefix-icon="el-icon-edit"></el-input>
           <template v-else>
           {{ scope.row.design_price }}
         </template>
        </template>
      </el-table-column>
      <el-table-column label="是否开启">
        <template slot-scope="scope">
          <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.status" inactive-color="#ff4949" :disabled="!scope.row.edit"></el-switch>
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
import { getGifts, setGifts } from '@/api/function'

export default {
  name: 'giftset',
  data() {
    return {
      loading: false,
      s: 100,
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      getGifts().then(res => {
        console.log(res)
        this.loading = false
        this.list = res.data.data.map(item => {
          this.$set(item, 'edit', false)
          item.original = item.design_price
          item.originalState = item.status
          return item
        })
      }).catch(err => {
        this.loading = false
        return err
      })
    },
    confirmEdit(item) {
      setGifts(item).then(res => {
        if (res.data.code) {
          item.original = item.design_price
          item.originalState = item.status
          item.edit = false
          this.$message({
            message: res.data.msg,
            type: 'success',
            duration: 3 * 1000
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error',
            duration: 3 * 1000
          })
        }
      })
    },
    cancelEdit(item) {
      item.edit = false
      item.design_price = item.original
      item.status = item.originalState
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
