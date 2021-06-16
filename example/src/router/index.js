import { createRouter, createWebHistory } from 'vue-router'
import { getStepsRoutes } from '@/utils/steps'
import { steps } from '../steps'

const routes = [
  {
    path: '/quote',
    name: 'Quote',
    component: () => import('../views/Quote.vue'),
    children: getStepsRoutes(steps),
    redirect: { name: 'v1Start' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Quote' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
