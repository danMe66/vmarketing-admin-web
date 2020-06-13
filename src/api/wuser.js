import request from '@/utils/request'

export function webUserList(query) {
  return request({
    url: '/vue-element-admin/wuser/list',
    method: 'get',
    params: query
  })
}

export function webUserInfo(id) {
  return request({
    url: '/vue-element-admin/wuser/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/wuser/pv',
    method: 'get',
    params: { pv }
  })
}

export function createWebUser(data) {
  return request({
    url: '/vue-element-admin/wuser/create',
    method: 'post',
    data
  })
}

export function updateWebUser(data) {
  return request({
    url: '/vue-element-admin/wuser/update',
    method: 'post',
    data
  })
}
