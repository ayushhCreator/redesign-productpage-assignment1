// routes/sharedRoutes.ts
import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const sharedRoutes: Routes = [
  {
    key: 'home',
    path: '/',
    component: lazy(() => import('@/views/Home/index')),
    authority: [],
    meta: {
      pageContainerType: 'default',
      // Add other meta properties as needed
    }
  }
]

export default sharedRoutes