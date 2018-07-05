<template>
<div>
  <div class="tip">
    <p>为您提供完善的运营资料</p>
  </div>
  <el-table :data="list" border v-loading="loading">
    <el-table-column label="标题">
      <template slot-scope="scope">
        <router-link class="link-type" :to="'/views' + scope.row.id">
        <span>{{ scope.row.title }}</span>
        </router-link>
      </template>
    </el-table-column>
    <el-table-column label="发布时间" prop="pushDate">
    </el-table-column>
    <el-table-column label="作者" prop="author">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button-group>
          <el-button icon="el-icon-edit" type="primary">编辑</el-button>
        </el-button-group>
      </template>
    </el-table-column>

  </el-table>
</div>
</template>

<script>
import { ArticleList } from '@/api/helpcenter'

export default {
  name: 'operationguidelines',
  data() {
    return {
      loading: false,
      list: [],
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.loading = true
      ArticleList(this.listQuery).then(res => {
        this.loading = false
        console.log(res)
        this.list = res.data.list
      }).catch(err => {
        this.loading = false
        return err
      })
    }
  }
}
</script>

<style lang="scss" scope>
.link-type, .link-type:focus {
    color: #337ab7;
    cursor: pointer;
}
</style>
