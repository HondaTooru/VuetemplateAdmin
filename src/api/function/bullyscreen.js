import request from '@/utils/request'

export function getBullyScreen(query) {
  return request({
    url: 'yequan/admin/bars',
    method: 'get',
    params: query
  })
}

export function setBullyScreen(data) {
  return request({
    url: 'yequan/admin/bars',
    method: 'post',
    data: data
  })
}
