<template>
  <div class="addsong">
    <el-form :model="addsong" ref="addsong" :rules="rules" label-position="right" label-width="100px">
      <el-form-item label="歌曲名称" prop="name">
        <el-input v-model="addsong.name"></el-input>
      </el-form-item>
      <el-form-item label="原唱" prop="original">
        <el-input v-model="addsong.original"></el-input>
      </el-form-item>
      <el-form-item label="乐队" prop="band">
         <el-select v-model="addsong.band.list" placeholder="请选择">
           <el-option v-for="item in addsong.band.options" :key="item.value" :label="item.name" :value="item.value"></el-option>
         </el-select>
      </el-form-item>
      <el-form-item label="歌曲单价" prop="price">
        <el-input v-model.number="addsong.price"></el-input>
      </el-form-item>
      <el-form-item label="歌曲排序" prop="order">
        <el-input v-model.number="addsong.order"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'addsong',
  data() {
    return {
      addsong: {
        name: '',
        original: '',
        band: {
          list: [],
          options: [
            { value: 1, name: '花儿乐队' },
            { value: 2, name: '飞儿乐队' },
            { value: 3, name: 'S.H.E' }
          ]
        },
        price: 0,
        order: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入乐队名称', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
</style>
