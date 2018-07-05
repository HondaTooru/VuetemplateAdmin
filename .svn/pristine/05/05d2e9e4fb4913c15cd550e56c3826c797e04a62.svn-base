// import { param2Obj } from '@/utils'
import Mock from 'mockjs'
const count = 10
const list = []

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    'magincName|1': ['小猪佩奇', '飞机', '火车头', '汽车'],
    'defaultPrice|10-100.1-2': 10,
    'setPrice|10-100.1-2': 10
  }))
}

export default {
  getList: config => ({ list: list })
}
