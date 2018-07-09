import request from '@/utils/request'

export function scrollScreen(data) {
  return request({
    url: 'yequan/admin/scrollScreen',
    method: 'post',
    data: data
  })
}

export function getscrllInfo(query) {
  return request({
    url: 'yequan/admin/scrollScreen',
    method: 'get',
    duration: 3 * 1000
  })
}
