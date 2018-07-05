import request from '@/utils/request'

export function editInfo(query) {
  return request({
    url: 'yequan/admin/edit_info',
    method: 'post',
    data: query
  })
}

export function getInfo() {
  return request({
    url: 'yequan/admin/edit_info',
    method: 'get'
  })
}
