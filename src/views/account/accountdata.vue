<template>
  <div class="account">
    <el-form ref="acc" :model="account" :rules="rules">
      <el-form-item label="大屏幕ID">
        <el-input v-model="account.login_name" disabled></el-input>
        <el-button type="primary" style="margin-top: 20px;" v-clipboard:copy='account.login_name' v-clipboard:success="clipboard">复制大屏幕ID</el-button>
      </el-form-item>
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
        <el-button type="primary" @click="updateUser" :loading="loading">保存</el-button>
      </el-form-item>
    </el-form>
   
  </div>
</template>

<script>
import { pcaa } from 'area-data'
import clipboard from '@/directive/clipboard'
import { editInfo, getInfo } from '@/api/acc'

export default {
  name: 'accountdata',
  data() {
    const checkTel = (rlue, value, callback) => {
      if (!value) {
        callback(new Error('联系电话号码不能为空'))
      } else {
        if (/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
          callback()
        } else {
          callback(new Error('您输入的手机号码格式错误'))
        }
      }
    }
    return {
      loading: false,
      pcaa: pcaa,
      location: [],
      account: {
        custom_name: '',
        contacter: '',
        phone: '',
        location_p: [],
        location_c: [],
        location_a: [],
        address: '',
        update_time: '',
        password: '',
        login_name: ''
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
  directives: {
    clipboard
  },
  created() {
    this.getList()
  },
  methods: {
    updateUser() {
      this.loading = true
      this.$refs['acc'].validate(valid => {
        if (valid) {
          editInfo(this.account).then(res => {
            this.loading = false
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 3 * 1000
            })
          })
        } else { this.loading = false }
      })
    },
    getList() {
      getInfo().then(res => {
        if (res.data.code === 1) {
          const data = res.data.data
          this.account = Object.assign({}, this.account, data)
          const location = `${data.location_p},${data.location_c},${data.location_a}`.split(',')
          this.location = location
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error',
            duration: 3 * 1000
          })
        }
      })
    },
    setPosition(val) {
      const position = [...val]
      this.account.location_p = position[0]
      this.account.location_c = position[1]
      this.account.location_a = position[2]
    },
    clipboard() {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 3 * 1000
      })
    }
  }
}
</script>

<style lang="scss">
</style>
