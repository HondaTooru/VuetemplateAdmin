<template>
  <div class="userlist">
    <el-dialog title="用户权限修改" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="update" label-position="top" ref="dataForm" :rules="rules">
        <el-form-item label="用户组">
          <el-select v-model="update.group">
            <el-option v-for="i in 3" :key="i" :value="i" :label="i | fomatGroup"></el-option>
          </el-select>
        </el-form-item>
        <div v-if="update.group !== 1">
        <el-form-item label="每日免费霸屏次数" prop="freeBully">
          <el-input v-model.number="update.freeBully"></el-input>
        </el-form-item>
        <el-form-item label="每日免费礼物/魔法棒次数" prop="freeGift">
          <el-input v-model.number="update.freeGift"></el-input>
        </el-form-item>  
        <el-form-item label="每日免费点歌次数" prop="freeSong">
          <el-input v-model.number="update.freeSong"></el-input>
        </el-form-item>          
        </div>
        <el-form-item>
          <template slot-scope="scope">
            <el-button type="primary" @click.native="handleUpdate" :loading="updateBtn">确定</el-button>
            <el-button @click.native="dialogFormVisible = false">取消</el-button>
          </template>
        </el-form-item>
      </el-form>
    </el-dialog>
    <div class="tip">
      <div class="rightSearch">
        <el-input ref="search" v-model="listQuery.name" @keyup.native.enter="getUserList" @clear="getUserList" placeholder="请输入用户名" class="input-with-select" clearable>
          <el-select v-model="listQuery.group" slot="prepend" placeholder="请选择" @change="handleGroup" clearable>
            <el-option v-for="i in 3" :key="i" :value="i" :label="i | fomatGroup"></el-option>
          </el-select>
          <el-button type="primary" slot="append" icon="el-icon-search" v-waves @click.native="handleSearch"></el-button>
        </el-input>
      </div>
    </div>
    <el-table border :data="list" v-loading="loading" :key="tablekey">
      <el-table-column prop="id" label="id" width="50"></el-table-column>
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
      <el-table-column label="用户组">
        <template slot-scope="scope">
          {{scope.row.group | fomatGroup}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" @click.native="handleViews(scope.row)">修改权限</el-button>
            <el-button type="danger" @click.native.prevent="deleteRow(scope.row)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
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
import { userlist, updateUser, deleteUser } from '@/api/userlist'
import waves from '@/directive/waves'
export default {
  name: 'userslist',
  data() {
    return {
      list: [],
      CurrentPage: 1,
      total: 0,
      tablekey: 0,
      loading: true,
      dialogFormVisible: false,
      updateBtn: false,
      update: {},
      listQuery: {
        group: undefined,
        name: undefined,
        type: undefined,
        page: 1,
        limit: 10,
        sort: '+id'
      },
      rules: {
        freeBully: [
          { type: 'number', require: true, message: '请输入次数', trigger: 'blur' }
        ],
        freeGift: [
          { type: 'number', require: true, message: '请输入次数', trigger: 'blur' }
        ],
        freeSong: [
          { type: 'number', require: true, message: '请输入次数', trigger: 'blur' }
        ]
      }
    }
  },
  directives: {
    waves
  },
  filters: {
    fomatGroup(status) {
      const groupList = { 1: '普通人员', 2: '工作人员', 3: '管理人员' }
      return groupList[status]
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    deleteRow(row) {
      this.$confirm('您确认删除此用户？', '提示', {
        type: 'warning'
      }).then(() => {
        deleteUser(row).then(res => {
          this.list.splice(row.$index, 1)
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        })
      }).catch(error => {
        return error
      })
    },
    handleSearch() {
      if (this.listQuery.name) {
        this.getUserList()
      } else {
        this.$refs['search'].focus()
      }
    },
    getUserList() {
      this.loading = true
      userlist(this.listQuery).then(res => {
        this.list = res.data.items
        this.total = res.data.total
        this.loading = false
      })
    },
    handleViews(row) {
      this.update = Object.assign({}, row) // copy obj
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate() {
      this.$refs['dataForm'].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.update)
          this.updateBtn = true
          updateUser(tempData).then(res => {
            this.updateBtn = false
            for (const v of this.list) {
              if (this.update.id === v.id) {
                const index = this.list[v]
                this.list.splice(index, 1, this.update)
                this.dialogFormVisible = false
                this.$notify({
                  title: '成功',
                  message: res.data.msg,
                  type: 'success',
                  duration: 2000
                })
                break
              }
            }
          })
        }
      })
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getUserList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getUserList()
    },
    handleGroup() {
      this.listQuery.page = 1
      this.CurrentPage = 1
      this.getUserList()
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
.tip {
  .rightSearch{
  float:right;
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
    width: 120px;
  }
}

}
</style>
