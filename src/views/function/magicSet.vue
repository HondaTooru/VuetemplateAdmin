<template>
  <div class="magic">
    <el-table border :data="list" v-loading="loading">
      <el-table-column label="道具名称" prop="gift_name"></el-table-column>
      <el-table-column label="系统价格（单位：元）" prop="default_price"></el-table-column>
      <el-table-column label="自定义价格（单位：元）">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input class="edit-input" v-model.number="scope.row.design_price" v-if="scope.row.edit" prefix-icon="el-icon-edit"></el-input>
            <el-button type="warning" class="cancel-button" icon="el-icon-refresh" v-if="scope.row.edit" @click="cancelEdit(scope.row)">取消</el-button>
          </template>
          <template v-else>
            {{ scope.row.design_price }}
          </template>  
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" type="success" icon="el-icon-circle-check-outline" @click.native.stop="confirmEdit(scope.row)">保存</el-button>
          <el-button v-else type="primary" @click.native.stop="scope.row.edit = !scope.row.edit" icon="el-icon-edit">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMagic, setMagic } from '@/api/function'

export default {
  name: 'magicset',
  data() {
    return {
      edit: false,
      loading: true,
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      getMagic().then(res => {
        console.log(res)
        this.loading = false
        if (res.data.code) {
          this.list = res.data.data.map(item => {
            this.$set(item, 'edit', false)
            item.original = item.design_price // will be used when user click cancel button
            return item
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error',
            duration: 3 * 1000
          })
        }
      }).catch(err => {
        this.loading = false
        return err
      })
    },
    cancelEdit(item) {
      item.edit = false
      item.design_price = item.original
      this.$message({
        message: '您取消了修改',
        type: 'warning',
        duration: 2000
      })
    },
    confirmEdit(item) {
      setMagic(item).then(res => {
        if (res.data.code) {
          item.edit = false
          item.original = item.design_price
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 2000
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error',
            duration: 3 * 1000
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scope>
.magic {
  .edit-input {
    padding-right: 100px;
  }
  .cancel-button {
    position: absolute;
    top: 7px;
    right: 15px;
  }
}
</style>
