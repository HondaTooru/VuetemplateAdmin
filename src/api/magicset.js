import request from '@/utils/request'

export function getMagicList(query) {
  return request({
    url: '/set/magiclist',
    method: 'get',
    params: query
  })
}
