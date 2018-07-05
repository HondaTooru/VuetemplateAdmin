<template>
  <div class="account">
    <el-form ref="account" :model="account" :rules="rules">
      <el-form-item label="商家名称" prop="custom_name">
        <el-input v-model="account.custom_name"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contacter">
        <el-input v-model="account.contacter"></el-input>  
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model.number="account.phone"></el-input>
      </el-form-item>
      <el-form-item label="商家位置">
        <area-select :level="2" v-model="location" :data="pcaa" @change="setPosition"></area-select>
      </el-form-item>
      <el-form-item label="商家地址" prop="address">
        <el-input v-model="account.address"></el-input>
      </el-form-item>
      <el-form-item>
      <el-form-item label="大屏幕口令" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
        <el-button type="primary" @click="saveData('account')" :loading="loading">保存</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>

<script>
import { pcaa } from 'area-data'
import { editInfo } from '@/api/acc'

export default {
  name: 'accountdata',
  data() {
    const checkTel = (rlue, value, callback) => {
      if (!value) {
        callback(new Error('联系电话号码不能为空'))
      } else {
        if (/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
          return true
        } else {
          callback(new Error('您输入的手机号码格式错误'))
        }
      }
    }
    return {
      loading: false,
      pcaa: pcaa,
      location: ['110000', '110100', '110101'],
      account: {
        custom_name: '',
        contacter: '',
        phone: '',
        location_p: ['110000'],
        location_c: ['110100'],
        location_a: ['110101'],
        address: '',
        update_time: '',
        password: ''
      },
      rules: {
        custom_name: [
          { required: true, message: '请输入商家名称', trigger: 'blur' }
        ],
        contacter: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        phone: [
          { validator: checkTel, trigger: 'blur', required: true }
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入大屏幕口令', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    saveData(formName) {
      this.loading = true
      this.$refs[formName].validate(valid => {
        console.log(valid)
        if (valid) {
          console.log(333)
          this.loading = false
        } else {
          this.loading = false
        }
        // if (valid) {
        //   editInfo(this.account).then(res => {
        //     this.loading = false
        //     console.log(res)
        //   })
        // } else {
        //   this.loading = false
        // }
      })
    },
    setPosition(val) {
      const position = [...val]
      this.account.location_p = position[0]
      this.account.location_c = position[1]
      this.account.location_a = position[2]
    }
  }
}
</script>

<style lang="scss">
</style>
