import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    songName: '@name',
    song: '@name',
    'price|1000-20000': 1000,
    'count|1-100': 1,
    addTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    isOpen: '@boolean'
  }))
}

export default {
  getSongList: config => {
    const { page = 1, limit = 10 } = param2Obj(config.url)
    const MockList = list.filter(item => {
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
