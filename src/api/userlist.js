import request from '@/utils/request'

export function userlist(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function updateUser(data) {
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: '/user/delete',
    method: 'post',
    data
  })
}
