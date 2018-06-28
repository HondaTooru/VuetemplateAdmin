<template>
<div class="articleDetail">
    <el-form :model="postFrom" :rules="rules">
        <el-form-item label="标题">
            <el-input v-model="postFrom.title"></el-input>
        </el-form-item>
        <el-form-item>
            <el-row :gutter="20">
                <el-col :span="8">
                    作者：<el-input></el-input>
                </el-col>
                <el-col :span="8">
                    发布时间：
                    <el-date-picker v-model="postFrom.display_time"></el-date-picker>
                </el-col>
                <el-col :span="8">
                    重要等级： <el-rate v-model="postFrom.importance" :max="3"></el-rate>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item>
            <div class="editor-container">
                <Tinymce :height='400' ref='edit' v-model='postFrom.content'/>
            </div>            
        </el-form-item>
    </el-form>

</div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { validateURL } from '@/utils/validate'

const defaultForm = {
  status: 'draft',
  title: '',
  content: '',
  content_short: '',
  source_url: '',
  image_url: '',
  display_time: '',
  id: '',
  platfomrs: ['a-platform'],
  comment_disabled: false,
  importance: 0
}

export default {
  name: 'articleDetail',
  components: {
    Tinymce
  },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必须项',
          type: 'error'
        })
        callback(null)
      } else {
        callback()
      }
    }
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validateURL(value)) {
          callback()
        } else {
          this.$message({
            message: '外链url填写不正确',
            type: 'error'
          })
          callback(null)
        }
      } else {
        callback()
      }
    }
    return {
      postFrom: Object.assign({}, defaultForm),
      loading: false,
      userListOptions: [],
      rules: {
        image_url: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }],
        source_url: [{ validator: validateSourceUri, trigger: 'blur' }]
      }
    }
  },
  computed: {
    contentShortLength() {
      return this.postFrom.content_short.length
    }
  },
  created() {
    if (this.isEdit) {
      // const id = this.$route.params && this.$route.params.id
      // this.fetchDate(id)
    } else {
      this.postFrom = Object.assign({}, defaultForm)
    }
  },
  methods: {
    //   fetchDate(id) {
    //       fetch
    //   }
  }
}
</script>
<style lang="scss" scoped>

</style>
