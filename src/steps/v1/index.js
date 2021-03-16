import WhichPet from './WhichPet.vue'
import Details from './Details.vue'
import Loans from './Loans.vue'
import Example from './Example.vue'

export const stepsV1 = [
  {
    name: 'Start',
    path: 'start',
    category: 'Compagnon',
    component: WhichPet,
  },
  {
    name: 'Details',
    path: 'details',
    category: 'Compagnon',
    component: Details,
  },
  {
    name: 'Loansb',
    path: 'loansb',
    category: 'Finances',
    component: Loans,
  },
  {
    name: 'Example',
    path: 'Example',
    category: 'Details',
    component: Example,
  },
  {
    name: 'Detailsa',
    path: 'detailsa',
    category: 'Details',
    component: Loans,
  },
]
