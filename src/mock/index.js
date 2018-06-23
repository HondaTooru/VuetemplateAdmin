import Mock from 'mockjs'
import loginAPI from './login'
import UserList from './userlist'
import ChatRecords from './chatrecords'
import Magic from './magicset'
import Gift from './giftset'
import Help from './helpcenter'

Mock.setup({
  timeout: '250-600'
})
// 登录接口
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)

// 用户列表
Mock.mock(/\/user\/list\.*/, 'get', UserList.userList)
Mock.mock(/\/user\/feedback\.*/, 'get', UserList.feedback)
Mock.mock(/\/user\/update/, 'post', UserList.updateUser)
Mock.mock(/\/user\/speech/, 'post', UserList.speechUser)
Mock.mock(/\/user\/records/, 'get', ChatRecords.userRecords)
Mock.mock(/\/user\/delrecords\.*/, 'get', ChatRecords.deleteRecords)

// set
Mock.mock(/\/set\/magiclist\.*/, 'get', Magic.getList)
Mock.mock(/\/set\/giftlist\.*/, 'get', Gift.getList)

Mock.mock(/\/help\/guide\.*/, 'get', Help.ArticleList)
export default Mock
