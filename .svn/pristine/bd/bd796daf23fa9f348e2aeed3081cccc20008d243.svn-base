<template>
  <div class="inviter">
    <div class="tip">
      <div class="search">
        <el-input clearable @clear="handleSeach" placeholder="请输入用户名" v-model="listQuery.keyword" @keyup.native.enter="handleSeach" class="input-with-select" ref="search">
          <el-button slot="append" icon="el-icon-search" v-waves @click.native="handleSeach" ></el-button>
        </el-input>
      </div>
    </div>
    <el-table :data="list" border v-loading="loading">
      <el-table-column prop="id" label="艺人ID"></el-table-column>
      <el-table-column prop="actorName" label="艺名"></el-table-column>
      <el-table-column prop="actorType" label="艺人类型">
        <template slot-scope="scope">
          {{ scope.row.actorType | type }}
        </template>
      </el-table-column>
      <el-table-column prop="actorAvatar" label="头像">
       <template slot-scope="scope">
          <div class="avatar" :style="{backgroundImage: 'url(' + scope.row.avatar + ')'}"></div>  
        </template>    
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click.native="Inviter(scope.$index, list)">邀请</el-button>
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
import waves from '@/directive/waves'
import { InviterList } from '@/api/opration'
export default {
  name: 'inviter',
  directives: {
    waves
  },
  data() {
    return {
      loading: false,
      CurrentPage: 1,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10,
        keyword: ''
      },
      list: []
    }
  },
  filters: {
    type(status) {
      const list = {
        1: 'DJ',
        2: 'DS',
        3: 'MC',
        4: 'VJ',
        5: '主持人',
        6: '嘉宾',
        7: '服务员',
        8: '模特',
        9: '歌手',
        10: '演员',
        11: '灯光师',
        12: '老司机',
        13: '舞者',
        14: '音响师' }
      return list[status]
    }
  },
  methods: {
    getList() {
      this.loading = true
      InviterList(this.listQuery).then(res => {
        this.loading = false
        this.list = res.data.list
        this.total = res.data.total
      })
    },
    Inviter(index, rows) {
      // rows.splice(index, 1)
      this.$notify({
        title: '成功',
        message: '邀请成功',
        type: 'success',
        duration: 2000
      })
    },
    handleSeach() {
      this.listQuery.page = 1
      this.getList()
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
    }
  }
}
</script>

<style lang="scss" scope>
.inviter {
  .search {
  float:right;
}
    .avatar {
      width: 50px;
      height: 50px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;
      overflow: hidden;
    }
}
</style>
