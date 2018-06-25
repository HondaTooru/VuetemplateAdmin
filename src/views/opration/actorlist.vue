<template>
  <div class="actorlist">
    <div class="tip">
      <el-select v-model="actorType" class="rightSelect" clearable @change="selectType">
        <el-option v-for="i in 14" :key="i" :value="i" :label="i | type"></el-option>
      </el-select>
    </div>
    <el-table :data="list" border v-loading="loading">
      <el-table-column prop="id" label="艺人ID"></el-table-column>
      <el-table-column prop="actorName" label="艺名"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sex ? '' : 'warning'">{{scope.row.sex ? '男' : '女'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="真实姓名" prop="realName"></el-table-column>
      <el-table-column label="艺人类型">
        <template slot-scope="scope">
          {{scope.row.actorType | type}}
        </template>
      </el-table-column>
      <el-table-column label="加入时间" prop="joinDate"></el-table-column>
      <el-table-column label="礼物分成比例(%)" prop="giftPracent"></el-table-column>
      <el-table-column label="收入列表">
        <template slot-scope="scope">
          <el-button type="info" icon="el-icon-view" @click="$router.push({name: 'View'})">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column label="礼物总金额(单位：元)" prop="giftTotal"></el-table-column>
      <el-table-column fixed="right" label="操作" width="205">
        <template slot-scope="scope">
          <el-button-group>
            <el-button type="primary" @click="editPercent(scope.row)">修改分成比例</el-button>
            <el-button type="danger" @click="unbind(scope.row)">解除绑定</el-button>
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
import { ActorList } from '@/api/opration'

export default {
  name: 'actorlist',
  data() {
    return {
      actorType: '',
      CurrentPage: 0,
      total: 0,
      loading: true,
      listQuery: {
        page: 1,
        limit: 10,
        type: undefined
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
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      ActorList(this.listQuery).then(res => {
        this.loading = false
        console.log(res)
        this.total = res.data.total
        this.list = res.data.list
      }).catch(err => {
        this.loading = false
        return err
      })
    },
    editPercent(row) {
      this.$prompt('修改分成比例', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^(?:0|[1-9][0-9]?|100)$/,
        inputErrorMessage: '请输入0~100的整数'
      }).then(({ value }) => {
        row.giftPracent = value
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }).catch(err => {
        return err
      })
    },
    unbind(row) {
      this.$confirm('您确定解除绑定吗？', '提示', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        this.list.splice(row.$index, 1)
        this.$message({
          message: '解除绑定成功',
          type: 'success',
          duration: 2000
        })
      }).catch(err => {
        return err
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
    selectType(type) {
      this.CurrentPage = 1
      this.listQuery.page = 1
      this.listQuery.actorType = type
      this.getList()
    }
  }
}
</script>

<style lang="scss" scope>
.rightSelect {
  float:right;
}
</style>
