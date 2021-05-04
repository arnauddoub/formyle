import { mount } from '@vue/test-utils'
import InputNumeric from '@/components/InputNumeric.vue'

describe('InputNumeric.vue', () => {
  it('should display the correct format', async () => {
    const wrapper = mount(InputNumeric, { props: { modelValue: 100000, id: 'test', name: 'test' } })

    expect(wrapper.find('input').element.value).toBe('100 000')
  })
})
