import request from '@/utils/request'

export function setGifts(data) {
  return request({
    url: 'yequan/admin/gifts',
    method: 'post',
    data: data
  })
}

export function getGifts(query) {
  return request({
    url: 'yequan/admin/gifts',
    method: 'get',
    prarms: query
  })
}
