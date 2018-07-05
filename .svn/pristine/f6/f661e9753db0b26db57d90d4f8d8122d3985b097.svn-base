import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []
const payMent = ['支付宝', '微信支付', 'QQ钱包', '网上银行', '快捷支付']
for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    songName: '@name',
    songer: '@name',
    'songPrice|100-10000': 100,
    songUser: '@cname',
    songTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'payMent|1': payMent
  }))
}

export default {
  getSongRecords: config => {
    const { page = 1, limit = 10, keyword } = param2Obj(config.url)
    const MockList = list.filter(item => {
      if (keyword && item.songUser !== keyword) return false
      // some code
      return true
    })
    const pageList = MockList.filter((item, index) => index < page * limit && index >= limit * (page - 1))
    return ({
      code: 1,
      total: MockList.length,
      list: pageList
    })
  }
}
