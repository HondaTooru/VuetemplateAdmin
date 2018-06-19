<template>
  <div class="voteRecords">
    <div class="tip">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :xl="12" :lg="12"><p>总流水：0  参与者分成：0</p></el-col>
        <el-col :xs="24" :sm="24" :md="12" :xl="12" :lg="12" style="text-align:right;">
          <el-dropdown>
            <el-button type="primary">
              投票主题<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
           </el-dropdown>
           <el-dropdown>
             <el-button type="primary">
               参与者<i class="el-icon-arrow-down el-icon--right"></i>
             </el-button>
             <el-dropdown-menu slot="dropdown">
               <el-dropdown-item>黄金糕</el-dropdown-item>
               <el-dropdown-item>狮子头</el-dropdown-item>
               <el-dropdown-item>螺蛳粉</el-dropdown-item>
               <el-dropdown-item>双皮奶</el-dropdown-item>
               <el-dropdown-item>蚵仔煎</el-dropdown-item>
             </el-dropdown-menu>
            </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <el-table
    :data="list"
    style="width: 100%"
    border
    empty-text="暂无数据"
    >
    <el-table-column prop="voteTheme" label="投票主题"></el-table-column>
    <el-table-column prop="voteJoiner" label="参与者"></el-table-column>
    <el-table-column prop="voter" label="投票者"></el-table-column>
    <el-table-column label="投票时间" sortable>
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.voteDateStart }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="votePay" label="支付金额"></el-table-column>
    <el-table-column prop="voteMange" label="参与者分成"></el-table-column>
    </el-table>
<el-pagination
  background
  layout="prev, pager, next"
  :total="1000"
  style="margin-top: 20px;text-align:right;"
  >
</el-pagination>
  </div>
</template>

<script>
export default {
  name: 'vote',
  data() {
    return {
      list: [{
        voteTheme: '这是一个投票',
        voteJoiner: '云天河',
        voter: '云天河',
        voteDateStart: '2018-6-14 23:59:59',
        votePay: '120',
        voteMange: '1%'
      }]
    }
  }
}
</script>

<style lang="css">
</style>
