import { lazy } from 'solid-js'

const routes = [
  {
    path: '/',
    component: lazy(() => import('~/pages/index.js')),
  },
  {
    path: '/*all',
    component: lazy(() => import('~/pages/[...all].js')),
  },
]

export default routes
