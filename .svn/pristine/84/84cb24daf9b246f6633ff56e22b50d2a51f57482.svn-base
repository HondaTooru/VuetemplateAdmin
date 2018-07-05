import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const list = []
const count = 100
const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    realname: '@cname()',
    sex: '@boolean()',
    avatar: image_url,
    'group|1': ['普通用户', '工作人员', '管理人员'],
    'gift|1': ['魔法棒', '小猪佩奇', '丘比特', '法拉利', '飞机', '火车头'],
    'type|2-7': 2, // 消息类型
    'effect|1': [10, 30, 60, 90, 120],
    content: '@csentence()',
    sendTime: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")')
  }))
}

export default {
  userRecords: config => {
    const { limit = 10, page = 1, type } = param2Obj(config.url)

    const mockList = list.filter(item => {
      if (type && item.type !== +type) return false
      return true
    })
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return ({
      total: mockList.length,
      list: pageList
    })
  },
  deleteRecords: config => {
    const { id } = param2Obj(config.url)
    console.log(config)
    if (id) {
      return ({
        msg: '删除成功'
      })
    }
    return ({
      msg: '删除失败'
    })
  }
}
