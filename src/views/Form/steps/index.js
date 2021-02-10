import Loans from './Loans.vue'
import Details from './Details.vue'

export const STEPS = [
  {
    name: 'Loans',
    path: 'loans',
    category: 'A',
    component: Loans,
  },
  {
    name: 'Loansa',
    path: 'loansa',
    category: 'A',
    component: Details,
  },
  {
    name: 'Loansb',
    path: 'loansb',
    category: 'A',
    component: Loans,
  },
  {
    name: 'Details',
    path: 'details',
    category: 'B',
    component: Details,
  },
  {
    name: 'Detailsa',
    path: 'detailsa',
    category: 'B',
    component: Loans,
  },
]
