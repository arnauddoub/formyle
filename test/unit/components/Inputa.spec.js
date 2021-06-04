import { mount } from '@vue/test-utils'
import Inputa from '@/components/inputa'

describe('Inputa.vue', () => {
  it('should display header text', () => {
    const msg = 'the input text'
    const wrapper = mount(Inputa, { props: { modelValue: msg, id: 'test', name: 'test' } })

    expect(wrapper.find('input').element.value).toBe(msg)
  })
})
