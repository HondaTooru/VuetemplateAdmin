import Mock from 'mockjs'

const count = 10
const bullyList = []
for (let i = 0; i < count; i++) {
  bullyList.push(Mock.mock({
    'time|+1': 10,
    'price|10-100.1-2': 10
  }))
}

export default {
  fetchList: () => ({ code: 1, list: bullyList })
}
