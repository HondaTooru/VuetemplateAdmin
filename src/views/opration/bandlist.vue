<template>
  <div class="bandlist">
    <div class="tip">
      <el-button icon="el-icon-plus" type="primary" @click.native="$router.push({ name: 'AddBand' })">新增乐队</el-button>
    </div>
    <el-table :data="list" border v-loading="loading" :default-sort="{prop: 'id', order: 'ascending'}">
      <el-table-column prop="id" label="乐队ID" sortable></el-table-column>
      <el-table-column prop="bandName" label="乐队名称"></el-table-column>
      <el-table-column prop="price" label="歌曲默认价格"></el-table-column>
      <el-table-column prop="parcenter" label="分成比例"></el-table-column>
      <el-table-column prop="createDate" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" @click.native="editPercent(scope.row)">修改分成比例</el-button>
            <el-button type="warning">编辑</el-button>
            <el-button type="danger">删除乐队</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="list.length"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :current-page.sync="CurrentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="listQuery.limit"
      :total="total"
      style="margin-top: 20px;text-align:right;"
      @current-change="handleChange"
      @size-change="handleSizeChange"
      >
    </el-pagination>
  </div>
</template>

<script>
import { getBandList } from '@/api/opration'

export default {
  name: 'bandlist',
  data() {
    return {
      CurrentPage: 1,
      loading: true,
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      getBandList(this.listQuery).then(res => {
        this.loading = false
        console.log(res)
        this.total = res.data.total
        this.list = res.data.list
      })
    },
    handleChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.CurrentPage = 1
      this.listQuery.page = 1
      this.listQuery.limit = val
      this.getList()
    },
    editPercent(row) {
      this.$prompt('修改分成比例', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^(?:0|[1-9][0-9]?|100)$/,
        inputErrorMessage: '请输入0~100的整数'
      }).then(({ value }) => {
        row.parcenter = value
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }).catch(err => {
        return err
      })
    }
  }
}
</script>

<style lang="scss">
</style>
