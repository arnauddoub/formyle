import BirthDate from './components/birth-date'
import Forma from './components/forma'

const components = {
  BirthDate,
  Forma,
}

function install(Vue) {
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { default as BirthDate } from './components/birth-date'
export { default as Forma } from './components/forma'
