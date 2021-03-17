import WhichPet from './WhichPet.vue'
import Details from './Details.vue'
import Choose from './Choose.vue'
import Customer from './Customer.vue'
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
    name: 'Choose',
    path: 'choose',
    category: 'Compagnon',
    component: Choose,
  },
  {
    name: 'Customer',
    path: 'customer',
    category: 'Coordonnées',
    component: Customer,
  },
  {
    name: 'Example',
    path: 'Example',
    category: 'Coordonnées',
    component: Example,
  },
  {
    name: 'Detailsa',
    path: 'detailsa',
    category: 'Coordonnées',
    component: Loans,
  },
]
