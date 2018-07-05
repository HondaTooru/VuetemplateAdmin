import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    realname: '@cname()',
    sex: '@boolean()',
    // avatar: Mock.Random.image('50x50', '#4A7BF7', '#FFF', 'png', 'avatar'),
    avatar: image_url,
    city: '@city()',
    freeGift: 20,
    freeBully: 20,
    freeSong: 1,
    'group|1-3': 1,
    'isSpeech': '@boolean()'
  }))
}

export default {
  userList: config => {
    const { group, type, name, page = 1, limit = 20, sort } = param2Obj(config.url)
    let mockList = List.filter(item => {
      if (group && item.group !== +group) return false
      if (type && item.type !== +type) return false
      if (name && item.realname.indexOf(name) < 0) return false
      return true
    })

    if (sort === '-id') mockList = mockList.reverse()
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      total: mockList.length,
      items: pageList
    }
  },
  updateUser: config => {
    return ({
      msg: '修改成功'
    })
  },
  speechUser: () => ({ msg: '操作成功' }),
  feedback: () => ({ msg: '提交成功' })
}
