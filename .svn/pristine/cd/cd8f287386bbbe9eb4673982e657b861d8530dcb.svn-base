import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const count = 100
const list = []

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    'templateName|1': ['活动消息推送', '测试模板', '打折消息推送'],
    'sendNums|1-100': 1,
    isInfos: '@boolean',
    'sendState|1-3': 1,
    sendTime: '@datetime("yyyy-MM-dd HH:mm:ss")'
  }))
}

export default {
  list: config => {
    const { page = 1, limit = 10 } = param2Obj(config.url)
    const MockList = list.filter(item => {
      return true
    })
    const PageList = MockList.filter((item, index) => index < page * limit && index >= limit * (page - 1))
    return ({
      code: 1,
      total: MockList.length,
      list: PageList
    })
  }
}
