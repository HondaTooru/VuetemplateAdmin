<template>
  <div class="large" v-loading="loading">
    <el-form :model="form" :rules="rules" ref="large">
      <el-form-item label="大屏幕标题">
        <div class="item">
          <el-row :gutter="20">
            <el-col :span="20"><el-input v-model="form.scroll_title"></el-input></el-col>
            <el-col :span="4"><el-button type="primary" @click.native.stop="update('scroll_title')">修改</el-button></el-col>
          </el-row>          
        </div>
      </el-form-item>
      <el-form-item label="跑马灯">
        <div class="item">
          <el-row :gutter="20">
            <el-col :span="20"><el-input v-model="form.scroll_tip"></el-input></el-col>
            <el-col :span="4"><el-button type="primary" @click.native.stop="update('scroll_tip')">修改</el-button></el-col>
          </el-row>          
        </div>
      </el-form-item>      
      <el-row :gutter="100">
        <el-col :xl="8" :lg="8" :md="12" :sm="12">
          <el-form-item label="公共号二维码">
            <div class="item">
              <div class="upload">
                <el-button type="primary">上传</el-button>
                <input type="file" class="elupload" @change="upImg('qrcode_url')">
              </div>
              <div class="qrcode_url">
                <img :src="form.qrcode_url" alt="" style="width:auto">
              </div>      
            </div>
          </el-form-item>    
        </el-col>
        <el-col :xl="8" :lg="8" :md="12" :sm="12">
          <el-form-item label="商家LOGO">
            <div class="item">
              <div class="upload">
                <el-button type="primary">上传</el-button>
                <input type="file" class="elupload" @change="upImg('logo_url')">
              </div>
              <div class="qrcode_url">
                <img :src="form.logo_url" alt="">
              </div>      
            </div>
          </el-form-item>          
        </el-col>
        <el-col :xl="8" :lg="8" :md="12" :sm="12">
          <el-form-item label="二维码桌帖">
            <div class="item">
              <div class="upload">
                <el-button type="primary" @click.stop="MRandom">换一个</el-button>
              </div>
              <div class="qrcode_url" v-if="form.desk_logo">
                <img :src="form.desk_logo[custom].logo_url" alt="">
              </div>      
            </div>
          </el-form-item>          
        </el-col>
      </el-row>       
    </el-form>
  </div>
</template>

<script>
import { scrollScreen, getscrllInfo } from '@/api/function'
import lrz from 'lrz'
// import { setMapToObj } from '@/utils'
export default {
  name: 'largeScreen',
  data() {
    return {
      loading: false,
      custom: 0,
      form: {
        scroll_title: '',
        scroll_tip: '',
        logo_url: '',
        logo: '',
        qrcode_url: '',
        desk_logo: ''
      },
      rules: {
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    MRandom() {
      this.custom++
      if (this.custom >= this.form.desk_logo.length) this.custom = 0
    },
    getList() {
      getscrllInfo().then(res => {
        if (res.data.code === 1) {
          this.form = Object.assign({}, this.form, res.data.data)
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error',
            duration: 3 * 1000
          })
        }
      })
    },
    update(name) {
      // const data = setMapToObj(new Map().set('value', this.form[name]).set('field', name))
      const data = {
        'field': name,
        'value': this.form[name]
      }
      scrollScreen(data).then(res => {
        if (res.data.code) {
          this.$message({
            message: res.data.msg,
            type: 'success',
            duration: 3 * 1000
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error',
            duration: 3 * 1000
          })
        }
      })
    },
    upImg(name) {
      const input = event.traget || event.srcElement
      if (input.files.length === 0) return
      this.loading = true
      lrz(input.files[0]).then(rst => {
        const obj = {
          field: name,
          value: rst.base64
        }
        scrollScreen(obj).then(res => {
          this.loading = false
          if (res.data.code === 1) {
            if (name === 'qrcode_url') this.getList()
            this.form[name] = rst.base64
            this.$message({
              message: '上传成功',
              type: 'success',
              duration: 3 * 1000
            })
          } else {
            this.$message({
              message: res.data.msg,
              type: 'error',
              duration: 3 * 1000
            })
          }
        }).catch(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>

<style lang="scss">
.large {
  .item {
    display: inline-block;
    width: 100%;
  }
  .upload {
    position: relative;
    display: inline-block;
      .elupload {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        cursor: pointer;
    }
    & +.qrcode_url {
      & > img {width: 100%}
      width: 100%;
      margin-top: 15px
    }
  }
}
</style>
