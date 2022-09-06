import { lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('~/page/index.js')),
  },
  {
    path: '/*all',
    component: lazy(() => import('~/page/[...all].js')),
  },
]

export default routes
