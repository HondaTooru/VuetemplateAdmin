import request from '@/utils/request'

export function getBandList(query) {
  return request({
    url: '/opration/bandlist',
    method: 'get',
    params: query
  })
}
