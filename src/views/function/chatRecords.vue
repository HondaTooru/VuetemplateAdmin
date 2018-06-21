<template>
  <div class="userRecord">
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
          <el-button type="danger" @click.native.prevent="deleteRow(scope.row.$index, list)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="list.length"
      background
      layout="prev, pager, next"
      :total="list.length * 3"
      :page-size="12"
      style="margin-top: 20px;text-align:right;"
      >
    </el-pagination>
  </div>
</template>

<script>
import { getRecords } from '@/api/chatrecords'
export default {
  name: 'userslist',
  data() {
    return {
      loading: true,
      list: []
    }
  },
  created() {
    // console.log(this.geList())
    this.geList()
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    geList() {
      getRecords().then(res => {
        console.log(res)
        this.list = res.data.list
        this.loading = false
      })
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
</style>
