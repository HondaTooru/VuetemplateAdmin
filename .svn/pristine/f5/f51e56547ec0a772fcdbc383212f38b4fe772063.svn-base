import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []
// const type = ['DJ', 'DS', 'MC', 'VJ', '主持人', '嘉宾', '服务员', '模特', '歌手', '演员', '灯光师', '老司机', '舞者', '音响师']
for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    sex: '@boolean()',
    actorName: '@name',
    realName: '@cname()',
    'actorType|1-14': 1,
    joinDate: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")'),
    'giftPracent|0-100': 0,
    'incharge|8000-50000': 10000,
    'giftTotal|10000-60000': 12000
  }))
}

export default {
  actorList: config => {
    const { page = 1, limit = 10, actorType } = param2Obj(config.url)
    const MockList = list.filter(item => {
      if (actorType && item.actorType !== +actorType) return false
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
