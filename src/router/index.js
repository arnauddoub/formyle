import { createRouter, createWebHistory } from 'vue-router'
import { steps } from '@/steps'

const getStepsRoutes = () => {
  const allStepsRoutes = []
  Object.keys(steps).map((version) => {
    steps[version].map((route) => {
      allStepsRoutes.push({
        name: version + route.name,
        path: version + '/' + route.path,
        component: route.component,
      })
    })
  })
  return allStepsRoutes
}

const routes = [
  {
    path: '/quote',
    name: 'Quote',
    component: () => import(/* webpackChunkName: "quote" */ '@/views/Quote.vue'),
    children: getStepsRoutes(),
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
