import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    reciveTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'giftName|1': ['小猪佩奇', '红玫瑰', '爱神之箭', '跑车', '单身汪', '么么哒', '抱抱', '喜欢你', '药不能停', '蟹蟹'],
    'giftNums|1-100': 1,
    'giftAmount|88-666': 88
  }))
}

export default {
  actorCharge: config => {
    const { page = 1, limit = 10, start, end } = param2Obj(config.url)
    const MockList = list.filter(item => {
      if (start && end) {
        if (Date.parse(item.reciveTime) < Date.parse(start.split('+').join(' ')) || Date.parse(item.reciveTime) > Date.parse(end.split('+').join(' '))) return false
      }
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
