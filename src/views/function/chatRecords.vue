<template>
  <div class="userRecord">
    <div class="tip">
      <el-select v-model="msgType" placeholder="请选择消息类型" class="rightSelect" @change="selectType">
        <el-option v-for="i in 7" :value="i" :label="i | type" :key="i"></el-option>
      </el-select>
    </div>
    <el-table border :data="list" v-loading="loading">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column prop="realname" label="昵称"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sex ? '' : 'danger'">{{ scope.row.sex ? '男' : '女' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <div class="avatar" :style="{backgroundImage: 'url(' + scope.row.avatar + ')'}"></div>  
        </template>
      </el-table-column>
      <el-table-column prop="group" label="用户组"></el-table-column>
      <el-table-column label="消费类型">
        <template slot-scope="scope">
          <el-tag type="danger">{{scope.row.gift}} </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="effect" label="特效时长"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="sendTime" label="发送时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click.native.prevent="deleteRow(scope.$index)">删除</el-button>
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
import { getRecords, delrecords } from '@/api/chatrecords'
export default {
  name: 'userslist',
  data() {
    return {
      msgType: '',
      loading: true,
      CurrentPage: 1,
      total: 0,
      list: [],
      listQuery: {
        page: 1,
        limit: 10,
        type: undefined
      }
    }
  },
  filters: {
    type(status) {
      const list = {
        1: '全部',
        2: '普通消息',
        3: '霸屏',
        4: '礼物',
        5: '魔法棒',
        6: '红包',
        7: '未知类型'
      }
      return list[status]
    }
  },
  created() {
    this.geList()
  },
  methods: {
    deleteRow(index) {
      this.$confirm('您确认删除此条信息吗？', '提示', { type: 'warning' }).then(() => {
        delrecords({ id: index }).then(res => {
          this.list.splice(index, 1)
          this.$message({
            type: 'success',
            message: res.data.msg,
            duration: 2000
          })
          if (!this.list.length) this.geList()
        })
      }).catch(err => err)
    },
    geList() {
      this.loading = true
      getRecords(this.listQuery).then(res => {
        console.log(res)
        this.list = res.data.list
        this.total = res.data.total
        this.loading = false
      })
    },
    handleChange(val) {
      this.listQuery.page = val
      this.geList()
    },
    handleSizeChange(size) {
      this.CurrentPage = 1
      this.listQuery.page = 1
      this.listQuery.limit = size
      this.geList()
    },
    selectType(val) {
      if (+val === 1) val = undefined
      this.CurrentPage = 1
      this.listQuery.page = 1
      this.listQuery.type = val
      this.geList()
    }
  }
}
</script>

<style lang="scss" scope>
.userRecord {
    .avatar {
      width: 50px;
      height: 50px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 10px;
      overflow: hidden;
    }
    td {
      & > div {
        white-space: nowrap;
      }
    }
}
.rightSelect {
  float:right;
}
</style>
