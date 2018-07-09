import request from '@/utils/request'

export function getMagic(query) {
  return request({
    url: 'yequan/admin/logic',
    method: 'get',
    params: query
  })
}

export function setMagic(data) {
  return request({
    url: 'yequan/admin/logic',
    method: 'post',
    data: data
  })
}
