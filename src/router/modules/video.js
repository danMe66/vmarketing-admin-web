/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '视频',
    icon: 'el-icon-video-camera'
  },
  children: [
    {
      path: 'video-live',
      component: () => import('@/views/video/live/index'),
      name: 'video-live',
      meta: { title: '直播', icon: 'el-icon-video-camera-solid' }
    },
    {
      path: 'video-demand',
      component: () => import('@/views/video/demand/index'),
      name: 'video-demand',
      meta: { title: '点播', icon: 'el-icon-video-play' }
    }
  ]
}
export default tableRouter
