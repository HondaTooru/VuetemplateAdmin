<template>
<div>
  <div class="tip">
    <el-date-picker
      class="rightDate"
      v-model="time"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="selectRange"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
    <el-table border v-loading="loading" :data="list">
        <el-table-column label="收到礼物时间">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            {{ scope.row.reciveTime }}
          </template>
        </el-table-column>
        <el-table-column label="礼物名称" prop="giftName"></el-table-column>
        <el-table-column label="礼物数量" prop="giftNums"></el-table-column>
        <el-table-column label="礼物总金额" prop="giftAmount"></el-table-column>
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
import { ActorCharge } from '@/api/opration'
import { parseTime, pickerOptions } from '@/utils'
export default {
  name: 'actorcharge',
  data() {
    return {
      loading: true,
      list: [],
      CurrentPage: 1,
      total: 0,
      time: '',
      pickerOptions: { shortcuts: pickerOptions },
      listQuery: {
        page: 1,
        limit: 10,
        start: undefined,
        end: undefined
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      ActorCharge(this.listQuery).then(res => {
        console.log(res)
        this.total = res.data.total
        this.list = res.data.list
        this.loading = false
      })
    },
    selectRange(val) {
      // console.log(parseTime(val[0]))
      this.listQuery.start = parseTime(val[0])
      this.listQuery.end = parseTime(val[1])
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
<style lang="scss" scoped>
.rightDate {
  float:right;
}
</style>
