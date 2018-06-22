import Mock from 'mockjs'
import loginAPI from './login'
import UserList from './userlist'
import ChatRecords from './chatrecords'

Mock.setup({
  timeout: '250-600'
})
// 登录接口
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)

// 用户列表
Mock.mock(/\/user\/list\.*/, 'get', UserList.userList)
Mock.mock(/\/user\/update/, 'post', UserList.updateUser)
Mock.mock(/\/user\/delete/, 'post', UserList.deleteUser)
Mock.mock(/\/user\/records/, 'post', ChatRecords.userRecords)

export default Mock
