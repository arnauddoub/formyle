import WhichPet from './WhichPet.vue'
import Loans from './Loans.vue'
import Details from './Details.vue'

export const stepsV1 = [
  {
    name: 'Start',
    path: 'start',
    category: 'Compagnon',
    component: WhichPet,
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
