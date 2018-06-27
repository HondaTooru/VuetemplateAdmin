import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
const list = []

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    actorName: '@cname',
    'actorType|1-14': 1,
    avatar: image_url
  }))
}

export default {
  list: config => {
    const { page = 1, limit = 10, keyword } = param2Obj(config.url)
    const MockList = list.filter(item => {
      // some code
      if (keyword && item.actorName !== keyword) return false
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
