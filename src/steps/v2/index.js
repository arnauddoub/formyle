import LoansT from './LoansT.vue'
import DetailsT from './DetailsT.vue'

export const stepsV2 = [
  {
    name: 'Start',
    path: 'start',
    category: 'Finances',
    component: LoansT,
  },
  {
    name: 'Loansa',
    path: 'loansa',
    category: 'Finances',
    component: DetailsT,
  },
  {
    name: 'Loansb',
    path: 'loansb',
    category: 'Finances',
    component: LoansT,
  },
  {
    name: 'Details',
    path: 'details',
    category: 'Details',
    component: DetailsT,
  },
  {
    name: 'Detailsa',
    path: 'detailsa',
    category: 'Zou',
    component: LoansT,
  },
]
