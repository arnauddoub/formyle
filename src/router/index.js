import { createRouter, createWebHistory } from 'vue-router'
import { steps } from '@/views/Quote/steps'

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
    component: () => import(/* webpackChunkName: "quote" */ '@/views/Quote/Quote.vue'),
    // redirect: { name: 'Loans' },
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

router.afterEach((to, from) => {
//   const toDepth = STEPS.findIndex((element) => element.name === to.name)
//   const fromDepth = STEPS.findIndex((element) => element.name === from.name)
//   to.meta.transitionName = toDepth < fromDepth ? 'page-left' : 'page-right'
})

export default router
