import Mock from 'mockjs'
import loginAPI from './login'
import UserList from './userlist'

// 登录接口
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUserName)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)

// 用户列表
Mock.mock(/\/user\/list/, 'post', UserList.userList)

export default Mock
