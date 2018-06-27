import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    nickName: '@cname',
    sex: '@boolean',
    'group|1-3': 1,
    'type|1-6': 2,
    isfree: '@boolean',
    'effectTime|1': ['10', '30', '60', '120'],
    'product|1': ['全场最佳', '足球宝贝', '决战世界杯', '社会人霸屏', '无效果', '红玫瑰', '	确认过眼神', '滴~滴滴', '求约霸屏', '生日霸屏', '我爱你'],
    sendTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'price|100-100000': 100,
    isbully: '@boolean'
  }))
}

export default {
  list: config => {
    const { page = 1, limit = 10, type } = param2Obj(config.url)
    const MockList = list.filter(item => {
      if (type && item.type !== +type) return false
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
