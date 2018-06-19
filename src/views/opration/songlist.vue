<template>
  <div class="songlist">
    <div class="tip">
      <el-button-group>
        <el-button type="primary" icon="el-icon-plus" @click.native="$router.push({name: 'AddSong'})">新增歌曲</el-button>
        <el-button type="danger" icon="el-icon-service" @click.native="$router.push({ name: 'SongsRecords' })">点歌记录</el-button>
      </el-button-group>
    </div>
    <el-table border :data="list">
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
          <el-button type="danger" @click.native="onDeleted(scope.$index, list)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'songlist',
  data() {
    return {
      list: [
        { id: 1, songName: '洗刷刷', song: '花儿乐队', price: 1000, count: 2, addTime: '2018-11-11', isOpen: true },
        { id: 2, songName: '洗刷刷', song: '花儿乐队', price: 1000, count: 2, addTime: '2018-11-11', isOpen: false },
        { id: 3, songName: '洗刷刷', song: '花儿乐队', price: 1000, count: 2, addTime: '2018-11-11', isOpen: false },
        { id: 4, songName: '洗刷刷', song: '花儿乐队', price: 1000, count: 2, addTime: '2018-11-11', isOpen: true },
        { id: 5, songName: '洗刷刷', song: '花儿乐队', price: 1000, count: 2, addTime: '2018-11-11', isOpen: true },
        { id: 6, songName: '洗刷刷', song: '花儿乐队', price: 1000, count: 2, addTime: '2018-11-11', isOpen: false },
        { id: 7, songName: '洗刷刷', song: '花儿乐队', price: 1000, count: 2, addTime: '2018-11-11', isOpen: false }
      ]
    }
  },
  methods: {
    onDeleted(index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
</style>
