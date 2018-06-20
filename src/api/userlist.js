import request from '@/utils/request'

export function userlist() {
  return request({
    url: '/user/list',
    method: 'post'
  })
}
