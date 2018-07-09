import request from '@/utils/request'

export function getUserList(query) {
  return request({
    url: 'yequan/admin/users',
    method: 'get',
    params: query
  })
}

export function editUser(data) {
  return request({
    url: 'yequan/admin/edit_user',
    method: 'post',
    data: data
  })
}

export function userStatus(data) {
  return request({
    url: 'yequan/admin/user_status',
    method: 'post',
    data: data
  })
}
