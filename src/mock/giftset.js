import Mock from 'mockjs'

const list = []
const count = ['小猪佩奇', '红玫瑰', '爱神之箭', '跑车', '单身汪', '么么哒', '抱抱', '喜欢你', '药不能停', '蟹蟹']

for (let i = 0; i < count.length; i++) {
  list.push(Mock.mock({
    'giftName': count[i],
    'defaultPrice|10-100.1-2': 10,
    isOpen: true,
    'setPrice|10-100.1-2': 10
  }))
}

export default {
  getList: () => ({ list: list })
}
