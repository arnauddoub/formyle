import Loans from './Loans.vue'
import Details from './Details.vue'

export const STEPS = [
  {
    name: 'Loans',
    path: 'loans',
    category: 'Finances',
    component: Loans,
  },
  {
    name: 'Loansa',
    path: 'loansa',
    category: 'Finances',
    component: Details,
  },
  {
    name: 'Loansb',
    path: 'loansb',
    category: 'Finances',
    component: Loans,
  },
  {
    name: 'Details',
    path: 'details',
    category: 'Details',
    component: Details,
  },
  {
    name: 'Detailsa',
    path: 'detailsa',
    category: 'Details',
    component: Loans,
  },
]
