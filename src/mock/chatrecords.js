import Mock from 'mockjs'

let list = []
const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'

list = Mock.mock({
  'list|12': [
    {
      realname: '@cname()',
      sex: '@boolean()',
      avatar: image_url,
      'group|1': ['普通用户', '工作人员', '管理人员'],
      'gift|1': ['魔法棒', '小猪佩奇', '丘比特', '法拉利', '飞机', '火车头'],
      'effect|1': [10, 30, 60, 90, 120],
      content: '@csentence()',
      sendTime: Mock.mock('@datetime("yyyy-MM-dd HH:mm:ss")')
    }
  ]
})
export default {
  userRecords: () => list
}
