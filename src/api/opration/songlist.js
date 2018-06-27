import request from '@/utils/request'

export function getSongList(query) {
  return request({
    url: '/opration/songlist',
    method: 'get',
    params: query
  })
}
