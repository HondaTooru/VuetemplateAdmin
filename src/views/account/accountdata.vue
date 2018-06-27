<template>
  <div class="account">
    <el-form ref="data" :model="account">
      <el-form-item label="商家名称">
        <el-input v-model="account.nickName"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="account.contact"></el-input>  
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="account.tel"></el-input>
      </el-form-item>
      <el-form-item label="商家位置">
        <el-input v-model="account.address"></el-input>
      </el-form-item>
      <el-form-item label="商家地址">
        <el-input v-model="account.location"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>

<script>
export default {
  name: 'accountdata',
  data() {
    return {
      account: {
        nickName: '',
        contact: '',
        tel: '',
        address: '',
        location: ''
      }
    }
  }
}
</script>

<style lang="scss">
</style>
