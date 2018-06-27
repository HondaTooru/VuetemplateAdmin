import request from '@/utils/request'

export function getUserCon(query) {
  return request({
    url: '/financial/userconsumption',
    method: 'get',
    params: query
  })
}
