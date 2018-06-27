<template>
  <div class="songlist">
    <div class="tip">
      <el-button-group>
        <el-button type="primary" icon="el-icon-plus" @click.native="$router.push({name: 'AddSong'})">新增歌曲</el-button>
        <el-button type="danger" icon="el-icon-service" @click.native="$router.push({ name: 'SongsRecords' })">点歌记录</el-button>
      </el-button-group>
    </div>
    <el-table border :data="list" v-loading="loading">
      <el-table-column prop="id" label="排序"></el-table-column>
      <el-table-column label="歌曲名称">
        <template slot-scope="scope">
          <el-tag type="primary">{{scope.row.songName}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="乐队">
        <template slot-scope="scope">
          <el-tag type="danger">{{scope.row.song}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价"></el-table-column>
      <el-table-column prop="count" label="点播次数"></el-table-column>
      <el-table-column prop="addTime" label="添加时间"></el-table-column>
      <el-table-column label="是否启用">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.isOpen"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click.native="onDeleted(scope.$index)">删除</el-button>
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
import { getSongList } from '@/api/opration'

export default {
  name: 'songlist',
  data() {
    return {
      CurrentPage: 1,
      listQuery: {
        page: 1,
        limit: 10
      },
      total: 0,
      loading: true,
      list: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    onDeleted(index) {
      this.$confirm('您确定删除吗？', '提示', {
        type: 'warning'
      }).then(res => {
        this.list.splice(index, 1)
        this.$message({
          message: '删除成功!',
          type: 'success',
          duration: 2000
        })
        if (!this.list.length) this.getList()
      }).catch(err => {
        return err
      })
    },
    getList() {
      this.loading = true
      getSongList(this.listQuery).then(res => {
        this.loading = false
        this.list = res.data.list
        this.total = res.data.total
        console.log(res)
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
    }
  }
}
</script>

<style lang="scss">
</style>
