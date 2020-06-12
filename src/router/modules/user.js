/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/users',
  component: Layout,
  // redirect: '/table/complex-table',
  name: 'User',
  meta: {
    title: '用户',
    icon: 'peoples'
  },
  children: [
    {
      path: 'web-user',
      component: () => import('@/views/user/list'),
      name: 'web-user',
      meta: { title: '用户管理', icon: 'peoples' }
    },
    {
      path: 'web-user-tag',
      component: () => import('@/views/user/tag'),
      name: 'web-user-tag',
      meta: { title: '用户标签', icon: 'el-icon-price-tag' }
    }
  ]
}
export default tableRouter
