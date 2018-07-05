<template>
  <div class="usercon">
   <div class="tip">
       <div class="selectRight">
        <el-select v-model="listQuery.type" clearable @change="handleSearch">
          <el-option v-for="i in 6" :key="i" :value="i" :label="i |type"></el-option>
        </el-select>
       </div>
   </div>
   <el-table v-loading="loading" :data="list" border>
     <el-table-column label="昵称" prop="nickName"></el-table-column>
     <el-table-column label="性别">
       <template slot-scope="scope">
         {{ scope.row.sex ? '男' : '女' }}
       </template>
     </el-table-column>
     <el-table-column label="用户组">
       <template slot-scope="scope">
         {{ scope.row.group | fomatGroup }}
       </template>
     </el-table-column>
     <el-table-column label="消费类型">
       <template slot-scope="scope">
         {{ scope.row.type | type }}
         <el-tag v-if="scope.row.isfree" type="danger"> {{ scope.row.isfree ? '免费' : '' }} </el-tag>         
       </template>
     </el-table-column>
     <el-table-column label="特效时长">
       <template slot-scope="scope">
         <el-tag type="danger">
           {{ scope.row.effectTime + '秒' }}
         </el-tag>
       </template>
     </el-table-column>
     <el-table-column label="消费产品">
       <template slot-scope="scope">
         {{ scope.row.product }} 
       </template>
     </el-table-column>
     <el-table-column label="发送时间">
       <template slot-scope="scope">
         <i class="el-icon-time"></i>
         {{ scope.row.sendTime }}
       </template>
     </el-table-column>
     <el-table-column label="消费金额">
       <template slot-scope="scope">
         {{ scope.row.price }}
       </template>
     </el-table-column>
     <el-table-column label="大屏是否显示">
       <template slot-scope="scope">
         <el-tag :type="scope.row.isbully ? 'success' : 'danger' ">
           {{ scope.row.isbully ? '已展示' : '未展示' }}
         </el-tag>
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
import { getUserCon } from '@/api/financial'

export default {
  name: 'userconsumption',
  data() {
    return {
      loading: true,
      CurrentPage: 1,
      total: 0,
      list: [],
      listQuery: {
        page: 1,
        limit: 10,
        type: ''
      }
    }
  },
  filters: {
    fomatGroup(status) {
      const groupList = { 1: '普通人员', 2: '工作人员', 3: '管理人员' }
      return groupList[status]
    },
    type(status) {
      const list = {
        1: '普通消息',
        2: '霸屏',
        3: '礼物',
        4: '魔法棒',
        5: '红包',
        6: '未知类型'
      }
      return list[status]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      getUserCon(this.listQuery).then(res => {
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
      this.CurrentPage = this.listQuery.page = 1
      this.listQuery.limit = val
      this.getList()
    },
    handleSearch() {
      this.CurrentPage = this.listQuery.page = 1
      this.getList()
    }
  }
}
</script>

<style lang="scss" scope>
.usercon {
  .selectRight {
    float:right;
  }
}
</style>
