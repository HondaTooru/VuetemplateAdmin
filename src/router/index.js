import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    name: 'Dashboard',
    children: [
      { path: 'dashboard', meta: { title: '首页', noCache: true, icon: 'dashboard' }, component: () => import('@/views/dashboard') },
      { path: 'car', name: 'Car', meta: { title: '赛车设置' }, hidden: true, component: () => import('@/views/dashboard/car') },
      { path: 'horse', name: 'Horse', meta: { title: '赛马设置' }, hidden: true, component: () => import('@/views/dashboard/horse') },
      { path: 'shake', name: 'Shake', meta: { title: '摇一摇设置' }, hidden: true, component: () => import('@/views/dashboard/shake') },
      { path: 'money', name: 'Money', meta: { title: '数钱设置' }, hidden: true, component: () => import('@/views/dashboard/money') },
      { path: 'dapsong', name: 'DapSong', meta: { title: '点歌设置' }, hidden: true, component: () => import('@/views/dashboard/dapsong') }
    ]
  },
  { path: '/vote',
    name: 'Vote',
    component: Layout,
    redirect: '/vote/voteset',
    hidden: true,
    meta: { title: '投票管理' },
    children: [
      { path: 'voteset', name: 'voteset', meta: { title: '投票列表' }, component: () => import('@/views/dashboard/vote') },
      { path: 'voterecords', name: 'voteRecords', meta: { title: '投票记录' }, component: () => import('@/views/dashboard/vote/voterecords') },
      { path: 'votecreate', name: 'voteCreate', meta: { title: '创建主题' }, component: () => import('@/views/dashboard/vote/creteth') }
    ]
  },
  {
    path: '/function',
    component: Layout,
    redirect: '/function/largescreen',
    name: 'Function',
    meta: { title: '功能设置', icon: 'function' },
    children: [
      { path: 'largescreen', name: 'Largescreen', component: () => import('@/views/function/largeScreen'), meta: { title: '大屏幕设置', icon: 'largescreen' }},
      { path: 'swiper', name: 'Swiper', component: () => import('@/views/function/swiper'), meta: { title: '轮播图设置', icon: 'swiper' }},
      { path: 'bullyscreen', name: 'Bullyscreen', component: () => import('@/views/function/bullyScreen'), meta: { title: '霸屏设置', icon: 'bullyscreen' }},
      { path: 'giftset', name: 'Giftset', component: () => import('@/views/function/giftset'), meta: { title: '礼物设置', icon: 'giftset' }},
      { path: 'margicset', name: 'Margicset', component: () => import('@/views/function/magicSet'), meta: { title: '魔法棒设置', icon: 'margicset' }},
      { path: 'wechat', name: 'Wechat', component: () => import('@/views/function/weChat'), meta: { title: '微信公众号', icon: 'wechat' }},
      { path: 'chatroom', name: 'Chatroom', component: () => import('@/views/function/chatRoom'), meta: { title: '聊天室设置', icon: 'chatroom' }},
      { path: 'chatrecords', name: 'Chatrecords', component: () => import('@/views/function/chatRecords'), meta: { title: '聊天记录', icon: 'chatrecords' }},
      { path: 'userlist', name: 'Userlist', component: () => import('@/views/function/usersList'), meta: { title: '用户列表', icon: 'userlist' }}
    ]
  },
  {
    path: '/opration',
    component: Layout,
    redirect: '/opration/actorlist',
    name: 'Opration',
    meta: { title: '运营设置', icon: 'opration' },
    children: [
      { path: 'actorlist', name: 'Actorlist', component: () => import('@/views/opration/actorlist'), meta: { title: '艺人列表', icon: 'actor' }},
      { path: 'bandlist', name: 'Bandlist', component: () => import('@/views/opration/bandlist'), meta: { title: '乐队列表', icon: 'band' }},
      { path: 'addband', name: 'AddBand', component: () => import('@/views/opration/addband'), meta: { title: '新增乐队', icon: '' }, hidden: true },
      { path: 'songlist', name: 'Songlist', component: () => import('@/views/opration/songlist'), meta: { title: '歌曲列表', icon: 'song' }},
      { path: 'inviter', name: 'Inviter', component: () => import('@/views/opration/inviter'), meta: { title: '邀请艺人', icon: 'inviter' }},
      { path: 'messagepush', name: 'MessagePush', component: () => import('@/views/opration/messagepush'), meta: { title: '消息推送', icon: 'message' }},
      { path: 'addsong', name: 'AddSong', component: () => import('@/views/opration/addsong'), meta: { title: '新增乐队', icon: '' }, hidden: true },
      { path: 'songsrecords', name: 'SongsRecords', component: () => import('@/views/opration/songsrecords'), meta: { title: '点歌记录', icon: '' }, hidden: true },
      { path: 'snednewmsg', name: 'SendNewMsg', component: () => import('@/views/opration/sendnewmsg'), meta: { title: '发送新消息', icon: '' }, hidden: true }
    ]
  },
  {
    path: '/financial',
    component: Layout,
    redirect: '/financial/cashaccount',
    name: 'Financial',
    meta: { title: '财务管理', icon: 'financial' },
    children: [
      { path: 'cashaccount', name: 'Cashaccount', component: () => import('@/views/financial/cashAccount'), meta: { title: '提现账号', icon: 'cash' }},
      { path: 'userconsumption', name: 'Userconsumption', component: () => import('@/views/financial/userconsumption'), meta: { title: '用户消费列表', icon: 'userconsumption' }},
      { path: 'songrecords', name: 'Songrecords', component: () => import('@/views/financial/songrecords'), meta: { title: '点歌记录', icon: 'songrecords' }}
    ]
  },
  {
    path: '/account',
    component: Layout,
    redirect: '/account/accountdata',
    name: 'Account',
    meta: { title: '账号管理', icon: 'account' },
    children: [
      { path: 'accountdata', name: 'AccountData', component: () => import('@/views/account/accountdata'), meta: { title: '账号资料', icon: 'accountdata' }},
      { path: 'accountpwd', name: 'Accountpwd', component: () => import('@/views/account/Accountpwd'), meta: { title: '修改密码', icon: 'accountpwd' }}
    ]
  },
  {
    path: '/helpcenter',
    component: Layout,
    redirect: '/helpcenter/notice',
    name: 'helpcenter',
    meta: { title: '帮助中心', icon: 'helpcenter' },
    children: [
      { path: 'notice', name: 'Notice', component: () => import('@/views/helpcenter/notice'), meta: { title: '公告', icon: 'notice' }},
      { path: 'manual', name: 'Manual', component: () => import('@/views/helpcenter/manual'), meta: { title: '使用手册', icon: 'manual' }},
      { path: 'operationguidelines', name: 'OperationGuidelines', component: () => import('@/views/helpcenter/operationalGuidelines'), meta: { title: '运营指南', icon: 'operationguidelines' }},
      { path: 'feedback', name: 'feedback', component: () => import('@/views/helpcenter/feedback'), meta: { title: '意见反馈', icon: 'feedback' }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
