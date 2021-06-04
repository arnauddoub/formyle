import BirthDate from './components/birth-date'
import Categories from './components/categories'
import Field from './components/field'
import Fields from './components/fields'
import Forma from './components/forma'
import Heading from './components/heading'
import InputNumeric from './components/input-numeric'
import Inputa from './components/inputa'
import Navigation from './components/navigation'
import RadioButton from './components/radio-button'
import RadioGroup from './components/radio-group'
import Selecta from './components/selecta'

const components = {
  BirthDate,
  Categories,
  Field,
  Fields,
  Forma,
  Heading,
  InputNumeric,
  Inputa,
  Navigation,
  RadioButton,
  RadioGroup,
  Selecta,
}

function install(Vue) {
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
}

export default { install }

export { default as BirthDate } from './components/birth-date'
export { default as Categories } from './components/categories'
export { default as Field } from './components/field'
export { default as Fields } from './components/fields'
export { default as Forma } from './components/forma'
export { default as Heading } from './components/heading'
export { default as InputNumeric } from './components/inputa'
export { default as Inputa } from './components/input-numeric'
export { default as Navigation } from './components/navigation'
export { default as RadioButton } from './components/radio-buttons'
export { default as RadioGroup } from './components/radio-group'
export { default as Selecta } from './components/selecta'
