import { createRouter, createWebHistory } from 'vue-router'
import { STEPS } from './views/Form/steps'

const routes = [
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "form" */ './views/Form/Form.vue'),
    redirect: { name: 'Loans' },
    children: STEPS,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Form' },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  const toDepth = STEPS.findIndex((element) => element.name === to.name)
  const fromDepth = STEPS.findIndex((element) => element.name === from.name)
  to.meta.transitionName = toDepth < fromDepth ? 'page-left' : 'page-right'
})

export default router
