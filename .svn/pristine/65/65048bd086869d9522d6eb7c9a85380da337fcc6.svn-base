<template>
  <div class="songsrecords">
    <div class="tip">
      <div class="search">
        <el-input placeholder="请输入用户名" v-model="listQuery.keyword" @keyup.native.enter="handleSeach" class="input-with-select" ref="search">
          <el-button slot="append" icon="el-icon-search" v-waves @click.native="handleSeach" ></el-button>
        </el-input>
      </div>
    </div>
    <el-table :data='list' border v-loading="loading">
      <el-table-column prop="songName" label="歌曲名称"></el-table-column>
      <el-table-column prop="songer" label="乐队演唱者"></el-table-column>
      <el-table-column prop="songPrice" label="单价"></el-table-column>
      <el-table-column prop="songUser" label="点歌用户"></el-table-column>
      <el-table-column prop="songTime" label="点歌时间"></el-table-column>
      <el-table-column prop="payMent" label="支付方式"></el-table-column>
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
import { getSongRecords } from '@/api/opration'
import waves from '@/directive/waves'

export default {
  name: 'songsrecords',
  data() {
    return {
      list: [],
      total: 0,
      loading: true,
      CurrentPage: 1,
      listQuery: {
        page: 1,
        limit: 10,
        keyword: ''
      }
    }
  },
  directives: {
    waves
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      getSongRecords(this.listQuery).then(res => {
        this.loading = false
        this.list = res.data.list
        this.total = res.data.total
        console.log(res)
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
    handleSeach() {
      if (this.listQuery.keyword) {
        this.getList()
      } else { this.$refs.search.focus() }
    }
  }
}
</script>

<style lang="scss" scope>
.search {
  float:right;
}
</style>
