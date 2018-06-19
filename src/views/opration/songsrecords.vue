<template>
  <div class="songsrecords">
    <el-table :data='list' border>
      <el-table-column prop="songName" label="歌曲名称"></el-table-column>
      <el-table-column prop="songer" label="乐队演唱者"></el-table-column>
      <el-table-column prop="songPrice" label="单价"></el-table-column>
      <el-table-column prop="songUser" label="点歌用户"></el-table-column>
      <el-table-column prop="songTime" label="点歌时间"></el-table-column>
      <el-table-column prop="payMent" label="支付方式"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'songsrecords',
  data() {
    return {
      songName: '',
      songer: '',
      songPrice: '',
      songUser: '',
      songTime: '',
      payMent: ''
    }
  }
}
</script>

<style lang="scss">
</style>
