import Mock from 'mockjs'

let List = []
const image_url = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'

List = Mock.mock({
  'list|12': [
    {
      realname: '@cname()',
      sex: '@boolean()',
      // avatar: Mock.Random.image('50x50', '#4A7BF7', '#FFF', 'png', 'avatar'),
      avatar: image_url,
      city: '@city()',
      'group|1': ['普通用户', '工作人员', '管理人员']
    }
  ]
})

export default {
  userList: () => List
}
