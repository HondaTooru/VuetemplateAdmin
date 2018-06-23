import request from '@/utils/request'

export function GiftList(query) {
  return request({
    url: '/set/giftlist',
    method: 'get',
    params: query
  })
}
