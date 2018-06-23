import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const list = []
const count = 100

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    title: '@csentence',
    pushDate: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")'),
    author: '@cname',
    content: Mock.mock('@paragraph')
  }))
}

export default {
  ArticleList: config => {
    const { page = 1, limit = 10 } = param2Obj(config.url)
    const MockList = list.filter(item => {
      return true
    })
    const pageList = MockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return ({
      total: MockList.length,
      list: pageList
    })
  }
}
