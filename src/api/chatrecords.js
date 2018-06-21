import request from '@/utils/request'

export function getRecords() {
  return request({
    url: '/user/records',
    method: 'post'
  })
}
