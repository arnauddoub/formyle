import BirthDate from './components/birth-date'
import Categories from './components/categories'
import Field from './components/field'
import Fields from './components/fields'
import Form from './components/form'
import Heading from './components/heading'
import Input from './components/input'
import InputNumeric from './components/input-numeric'
import Navigation from './components/navigation'
import RadioButton from './components/radio-button'
import RadioGroup from './components/radio-group'
import Select from './components/select'

import './styles/main.css'

const components = {
  BirthDate,
  Categories,
  Field,
  Fields,
  Form,
  Heading,
  InputNumeric,
  Input,
  Navigation,
  RadioButton,
  RadioGroup,
  Select,
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
export { default as Form } from './components/form'
export { default as Heading } from './components/heading'
export { default as Input } from './components/input'
export { default as InputNumeric } from './components/input-numeric'
export { default as Navigation } from './components/navigation'
export { default as RadioButton } from './components/radio-button'
export { default as RadioGroup } from './components/radio-group'
export { default as Select } from './components/select'
