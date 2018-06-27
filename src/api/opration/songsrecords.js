import request from '@/utils/request'

export function getSongRecords(query) {
  return request({
    url: '/opration/songsrecords',
    method: 'get',
    params: query
  })
}
