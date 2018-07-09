<template>
  <div class="bullyScreen">
    <el-form :model="form" label-position="right" label-width="100px">
      <el-form-item label="霸小视频">
        <el-switch v-model="form.bars_vedio"></el-switch>
      </el-form-item>
      <el-form-item label="新运霸屏">
        <el-switch v-model="form.bars_lucky"></el-switch>
      </el-form-item>
    </el-form>
    <div class="tip">
      <p>霸屏信息列表</p>
    </div>
    <el-table :data="list" border v-loading="loading">
      <el-table-column
      label="时间(秒)"
      >
        <template slot-scope="scope">
         <template v-if="scope.row.edit">
            <el-input prefix-icon="el-icon-edit" v-model.number="scope.row.bartime"></el-input>
         </template>
         <span v-else>{{ scope.row.bartime }}</span>
        </template>
      </el-table-column>
      <el-table-column
      label="价格(元)"
      >
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input prefix-icon="el-icon-edit" v-model.number="scope.row.barprices"></el-input>
          </template>
          <span v-else>{{ scope.row.barprices}}</span>
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
              <el-button type="danger" icon="el-icon-remove-outline" @click.native.prevent="deleteRow(scope.row)">删除</el-button>
            </template>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <div class="tip" style="margin: 20px 0">
      <p>添加霸屏信息</p>
    </div>
    <el-table :data="add" border>
      <el-table-column label="时间(秒)">
        <template slot-scope="scope">
          <el-input v-model.number="scope.row.bartime" prefix-icon="el-icon-edit"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="价格(元)">
        <template slot-scope="scope">
          <el-input v-model.number="scope.row.barprices" prefix-icon="el-icon-edit"></el-input>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="addItem" icon="el-icon-circle-plus-outline" :loading="isLoading">添加</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getBullyScreen, setBullyScreen } from '@/api/function'

export default {
  name: 'bullyscreen',
  data() {
    return {
      loading: true,
      isLoading: false,
      form: {
        bars_lucky: '',
        bars_vedio: ''
      },
      list: [],
      add: [
        { bartime: '', barprices: '' }
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    deleteRow(row) {
      this.loading = true
      setBullyScreen({ id: row.id, action: 'del' }).then(res => {
        this.loading = false
        this.list.splice(this.list.indexOf(row), 1)
        this.$message({
          message: '删除成功',
          type: 'success',
          duration: 3 * 1000
        })
      })
    },
    addItem() {
      if ((this.add[0].bartime).toString().trim() && (this.add[0].barprices).toString().trim()) {
        this.isLoading = true
        const data = this.add[0]
        setBullyScreen(data).then(res => {
          this.isLoading = false
          console.log(res)
          if (res.data.code === 1) {
            this.list.push(Object.assign({}, data))
            this.add[0].bartime = this.add[0].barprices = ''
            this.$message({
              message: '添加成功',
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
        }).catch(() => { this.isLoading = false })
      } else {
        this.$message({
          message: '请把信息输入完整',
          type: 'error',
          duration: 3 * 1000
        })
      }
    },
    getList() {
      this.loading = true
      getBullyScreen().then(res => {
        this.loading = false
        if (res.data.code === 1) {
          this.from = res.data.switch
          this.list = res.data.data.map(item => {
            this.$set(item, 'edit', false)
            item.originalTime = item.bartime
            item.originalPrice = item.barprices
            return item
          })
        } else {
          this.$message({
            message: 'error',
            type: 'error',
            duration: 3 * 1000
          })
        }
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
      try {
        this.list.forEach(item => {
          if (item.originalTime === row.bartime && item.id !== row.id) {
            this.$message({
              message: '已经存在重复的时间',
              type: 'error',
              duration: 3 * 1000
            })
            this.flag = false
            throw new Error('Error')
          } else { this.flag = true }
        })
      } catch (e) {
        console.log(e)
      }
      if (this.flag) {
        this.loading = true
        const { id, bartime, barprices } = row
        const data = {
          id: id,
          barprices: barprices,
          bartime: bartime
        }
        setBullyScreen(data).then(res => {
          this.loading = false
          if (res.data.code === 1) {
            row.originalTime = row.bartime
            row.originalPrice = row.barprices
            row.edit = !row.edit
            this.$message({
              message: '修改成功',
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
      }
    }
  }
}
</script>

<style lang="scss">
</style>
