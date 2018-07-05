<template>
  <div class="srecords">
    <div class="tip">
      <div class="serchInput">
      <el-input v-model="listQuery.keyword" placeholder="请输入用户名" ref="search" @keyup.native.enter="handleSearch">
        <el-button slot="append" type="primary" v-waves @click.native="handleSearch">搜索</el-button>
      </el-input>
      </div>
    </div>
    <el-table :data="list" v-loading="loading" border>
      <el-table-column label="歌曲名称">
        <template slot-scope="scope">
          <el-tag type="danger"><i class="el-icon-service"></i> {{ scope.row.songName }} </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="乐队演唱者" prop="user"></el-table-column>
      <el-table-column label="单价" prop="price"></el-table-column>
      <el-table-column label="点歌用户" prop="recordUser"></el-table-column>
      <el-table-column label="点歌时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i> {{ scope.row.recordTime }}
        </template>
      </el-table-column>
      <el-table-column label="支付方式" prop="payWay"></el-table-column>
    </el-table>
    <el-pagination
    v-if="total"
    background
    :current-page.sync="CurrentPage"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :page-size="listQuery.limit"
    style="margin-top: 20px;text-align:right;"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
    :page-sizes="[10, 20, 30, 50]"
    >
    </el-pagination>
  </div>
</template>

<script>
import waves from '@/directive/waves'
import { getsRecords } from '@/api/financial'

export default {
  name: 'songrecords',
  directives: {
    waves
  },
  data() {
    return {
      CurrentPage: 1,
      loading: false,
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        keyword: ''
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      getsRecords(this.listQuery).then(res => {
        this.loading = false
        console.log(res)
        this.list = res.data.list
        this.total = res.data.total
      })
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.page = this.CurrentPage = 1
      this.listQuery.limit = val
      this.getList()
    },
    handleSearch() {
      this.listQuery.page = 1
      this.getList()
    }
  }
}
</script>

<style lang="scss" scope>
.srecords {
  .serchInput {
    float:right;
  }
}
</style>
