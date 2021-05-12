import BirthDate from './components/birth-date'
import Categories from './components/categories'
import Forma from './components/forma'
import Navigation from './components/navigation'

const components = {
  BirthDate,
  Categories,
  Forma,
  Navigation,
}

function install(Vue) {
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { default as BirthDate } from './components/birth-date'
export { default as Categories } from './components/categories'
export { default as Forma } from './components/forma'
export { default as Navigation } from './components/navigation'
