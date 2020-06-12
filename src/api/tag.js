import request from '@/utils/request'

// 获取标签列表
export function tagList() {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get'
  })
}

// 新增标签
export function addTag(data) {
  return request({
    url: '/vue-element-admin/role',
    method: 'post',
    data
  })
}

// 更新标签
export function updateTag(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

// 删除标签
export function deleteTag(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}
