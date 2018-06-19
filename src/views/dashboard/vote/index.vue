<template>
  <div class="vote">
    <div class="tip">
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :xl="12" :lg="12"><p>投票功能分成比例 商家：50% 用户：0%</p></el-col>
        <el-col :xs="24" :sm="24" :md="12" :xl="12" :lg="12" style="text-align:right;">
          <el-button-group>
            <el-button type="primary" icon="el-icon-document" @click.native.prevent="$router.push({name: 'voteRecords'})">投票记录</el-button>
            <el-button type="primary" icon="el-icon-plus" @click.native.prevent="$router.push({name: 'voteCreate'})">创建主题</el-button>
            <el-button type="primary" icon="el-icon-edit" @click.native.prevent="voteUpdate">分成比例修改</el-button>
          </el-button-group>
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
    <el-table-column prop="voteSign" label="扫码报名"></el-table-column>
    <el-table-column label="状态">
      <template slot-scope="scope">
        <el-tag size="medium" type="warning">{{ scope.row.voteSate }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="开始日期" sortable>
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.voteDateStart }}</span>
      </template>
    </el-table-column>
    <el-table-column label="结束日期" sortable>
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.voteDateEnd }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="voteMange" label="用户管理"></el-table-column>
    <el-table-column label="操作" fixed="right">
      <template slot-scope="scope">
    <el-button>编辑</el-button>
    <el-button type="danger">删除</el-button>
  </template>
    </el-table-column>
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
        voteSign: '已报名',
        voteSate: '冻结',
        voteDateStart: '2018-6-14 23:59:59',
        voteDateEnd: '2018-6-14 23:59:59',
        voteMange: '云天河'
      }]
    }
  },
  methods: {
    voteUpdate() {
      this.$prompt('填写投票用户获得的分成比例，不得超过50%', '修改投票用户的分成比例', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /\S/,
        inputErrorMessage: '请输入分成比例',
        inputPlaceholder: '请输入分成比例成分'
      }).then(val => {
        this.$message({
          message: '修改成功',
          type: 'success',
          duration: 1500
        })
      }).catch(() => {
        this.$message({
          message: '修改失败',
          type: 'error',
          duration: 1500
        })
      })
    }
  }
}
</script>

<style lang="scss">
</style>
