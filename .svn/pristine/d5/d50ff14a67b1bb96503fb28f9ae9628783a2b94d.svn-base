<template>
  <div class="push">
    <div class="tip">
      <el-button icon="el-icon-plus" type="primary" @click.native="$router.push({ name: 'SendNewMsg'})">发送新消息</el-button>
    </div>
    <el-table :data="list" border v-loading="loading">
      <el-table-column prop="templateName" label="模板名称"></el-table-column>
      <el-table-column prop="sendNums" label="发送数量"></el-table-column>
      <el-table-column label="是否有详情">
        <template slot-scope="scope">
          {{ scope.row.isInfos ? '是' : '否'}}
        </template>
      </el-table-column>
      <el-table-column prop="sendState" label="发送状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sendState | fortmatMsg">{{scope.row.sendState | formatType}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="sendTime" label="发送时间"></el-table-column>
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
import { getPushList } from '@/api/opration'

export default {
  name: 'messagepush',
  data() {
    return {
      CurrentPage: 1,
      total: 0,
      loading: false,
      list: [],
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  filters: {
    fortmatMsg(status) {
      const state = {
        1: 'info',
        2: 'danger',
        3: 'success'
      }
      return state[status]
    },
    formatType(status) {
      const state = {
        1: '审核中',
        2: '已拒绝',
        3: '已推送'
      }
      return state[status]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      getPushList(this.listQuery).then(res => {
        console.log(res)
        this.loading = false
        this.list = res.data.list
        this.total = res.data.total
      })
    },
    handleChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(val) {
      this.CurrentPage = this.listQuery.page = 1
      this.listQuery.limit = val
      this.getList()
    }
  }
}
</script>

<style lang="scss" scope>
</style>
