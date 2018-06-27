import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    author: 'End',
    sendTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
    'important|1-3': 1,
    'status|1-3': 1,
    title: '@cparagraph(1)'
  }))
}

export default {
  list: config => {
    const { page = 1, limit = 10 } = param2Obj(config.url)
    const MockList = list.filter(item => {
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
