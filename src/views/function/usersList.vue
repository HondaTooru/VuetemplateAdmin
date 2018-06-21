<template>
  <div class="userlist">
    <el-table border :data="list" v-loading="loading">
      <el-table-column prop="realname" label="昵称"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sex ? '' : 'danger'">{{ scope.row.sex ? '男' : '女' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <div class="avatar" :style="{backgroundImage: 'url(' + scope.row.avatar + ')'}"></div>  
        </template>    
      </el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="group" label="用户组"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary">修改权限</el-button>
            <el-button type="danger" @click.native.prevent="deleteRow(scope.row.$index, list)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="list.length"
      background
      layout="prev, pager, next"
      :total="list.length * 3"
      :page-size="15"
      style="margin-top: 20px;text-align:right;"
      @current-change="getUserList"
      >
    </el-pagination>
  </div>
</template>

<script>
import { userlist } from '@/api/userlist'

export default {
  name: 'userslist',
  data() {
    return {
      list: [],
      loading: true
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    getUserList() {
      userlist().then(res => {
        console.log(res)
        this.list = res.data.list
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scope>
.userlist {
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
