import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const list = []
const count = 100

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    bandName: '@name',
    'price|100-10000': 100,
    'parcenter|0-100': 0,
    createDate: '@datetime("yyyy-MM-dd HH:mm:ss")'
  }))
}

export default {
  getBandlist: config => {
    const { page = 1, limit = 10 } = param2Obj(config.url)
    const pageList = list.filter((item, index) => index < page * limit && index >= limit * (page - 1))
    return ({
      code: 1,
      total: list.length,
      list: pageList
    })
  }
}
