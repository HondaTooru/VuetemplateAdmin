import Mock from 'mockjs'

let List = []

List = Mock.mock({
  'data|1-30': [
    {
      nickname: '@cname()',
      sex: '@boolean()',
      avatar: '',
      city: '@city()',
      'group|1': ['普通用户', '工作人员', '管理人员']
    }
  ]
})

export default {
  userList: config => {
    return {
      list: List
    }
  }
}
