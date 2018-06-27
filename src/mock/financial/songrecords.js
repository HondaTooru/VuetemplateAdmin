import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []
const payWay = ['支付宝', '微信支付', 'QQ钱包', '快捷支付']

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    songName: '@name',
    user: '@cname',
    'price|100-10000': 100,
    recordUser: '@cname',
    recordTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'payWay|1': payWay
  }))
}

export default {
  list: config => {
    const { page = 1, limit = 10, keyword } = param2Obj(config.url)
    const MockList = list.filter(item => {
      if (keyword && item.recordUser !== keyword) return false
      return true
    })
    const pageList = MockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return ({
      code: 1,
      total: MockList.length,
      list: pageList
    })
  }
}
