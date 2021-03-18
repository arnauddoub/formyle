import WhichPet from './WhichPet.vue'
import Details from './Details.vue'
import Choose from './Choose.vue'
import Customer from './Customer.vue'

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
]
