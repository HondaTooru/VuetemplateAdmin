<template>
  <div class="notice">
    <el-table :data="list" v-loading="loading" border>
      <el-table-column prop="sendTime" label="发布时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i> {{ scope.row.sendTime }}
        </template>
      </el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column label="重要等级">
        <template slot-scope="scope">
          <el-rate disabled :max="3" v-model="scope.row.important"></el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <router-link :to="{path: 'view/' + scope.row.id}">
            {{ scope.row.title }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit" @click.native="$router.push({path: 'edit/' + scope.row.id  })">编辑</el-button>
            <el-button type="danger">删除</el-button>
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
import { getNoticeList } from '@/api/help'

export default {
  name: 'notice',
  data() {
    return {
      CurrentPage: 1,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
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
      getNoticeList(this.listQuery).then(res => {
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

<style lang="scss">
.notice {
  a {
    color:#337ab7;
    transition: color .28s;
    &:hover {
      color:#409EFF
    }
  }
}
</style>
