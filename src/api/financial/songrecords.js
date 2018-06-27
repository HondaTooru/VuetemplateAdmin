import request from '@/utils/request'

export function getsRecords(query) {
  return request({
    url: '/financial/getsongrecord',
    method: 'get',
    params: query
  })
}
