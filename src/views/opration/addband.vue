<template>
  <div class="addband">
    <el-form ref="band" :model="form" :rules="rules" label-position="right" label-width="260px">
      <el-form-item label="乐队名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="乐队歌单默认价格" prop="price">
        <el-input v-model.number="form.price"></el-input>
      </el-form-item>
      <el-form-item label="乐队演奏者总分成(最大分成比例70%)" prop="parcenter">
        <el-input v-model.number="form.parcenter"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'addband',
  data() {
    return {
      form: {
        name: '',
        price: '',
        parcenter: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入乐队名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' },
          { type: 'number', message: '请输入数字' }
        ],
        parcenter: [
          { required: true, message: '请输入成分比例', trigger: 'blur' },
          { type: 'number', message: '请输入数字' }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
</style>
