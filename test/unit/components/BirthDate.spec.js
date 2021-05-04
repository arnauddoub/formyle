import { mount } from '@vue/test-utils'
import BirthDate from '@/components/BirthDate.vue'
import Maska from 'maska'

describe('BirthDate.vue', () => {
  it('should display the correct format', async () => {
    const wrapper = mount(BirthDate, {
      global: {
        plugins: [Maska],
      },
      props: { modelValue: '27/06/1996', id: 'test', name: 'test' },
    })

    expect(wrapper.find('#test-day').element.value).toBe('27')
    expect(wrapper.find('#test-month').element.value).toBe('06')
    expect(wrapper.find('#test-year').element.value).toBe('1996')
  })
})
