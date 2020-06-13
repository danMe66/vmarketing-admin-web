/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/web-user',
  component: Layout,
  // redirect: '/table/complex-table',
  name: 'WebUser',
  meta: {
    title: '用户',
    icon: 'peoples'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/web-user/list'),
      name: 'web-user',
      meta: { title: '用户管理', icon: 'peoples' }
    },
    {
      path: 'tag',
      component: () => import('@/views/web-user/tag'),
      name: 'web-user-tag',
      meta: { title: '用户标签', icon: 'el-icon-price-tag' }
    }
  ]
}
export default tableRouter
