import Mock from 'mockjs'
import loginAPI from './login'
import UserList from './userlist'
import ChatRecords from './chatrecords'
import Magic from './magicset'
import Gift from './giftset'
import Help from './helpcenter'
import bullyScreen from './bullyScreen'
import { Opration, ActorCharge, BandList, SongList, getRecords, InviterList, getPushList } from './opration'
import { FinanCialList, getSongRecord } from './financial'
import { NoticeList } from './help'

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
Mock.mock(/\/user\/bully/, 'post', bullyScreen.fetchList)

// set
Mock.mock(/\/set\/magiclist\.*/, 'get', Magic.getList)
Mock.mock(/\/set\/giftlist\.*/, 'get', Gift.getList)

// opration
Mock.mock(/\/opration\/actorlist\.*/, 'get', Opration.actorList)
Mock.mock(/\/opration\/actorcharge\.*/, 'get', ActorCharge.actorCharge)
Mock.mock(/\/opration\/bandlist\.*/, 'get', BandList.getBandlist)
Mock.mock(/\/opration\/songlist\.*/, 'get', SongList.getSongList)
Mock.mock(/\/opration\/songsrecords\.*/, 'get', getRecords.getSongRecords)
Mock.mock(/\/opration\/inviterlist\.*/, 'get', InviterList.list)
Mock.mock(/\/opration\/pushlist\.*/, 'get', getPushList.list)

// financial
Mock.mock(/\/financial\/userconsumption\.*/, 'get', FinanCialList.list)
Mock.mock(/\/financial\/getsongrecord\.*/, 'get', getSongRecord.list)

Mock.mock(/\/help\/guide\.*/, 'get', Help.ArticleList)
Mock.mock(/\/help\/notice\.*/, 'get', NoticeList.list)
export default Mock
