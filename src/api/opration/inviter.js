import request from '@/utils/request'

export function InviterList(query) {
  return request({
    url: '/opration/inviterlist',
    method: 'get',
    params: query
  })
}
