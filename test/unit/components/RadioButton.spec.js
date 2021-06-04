import { mount } from '@vue/test-utils'
import RadioButton from '@/components/radio-button'

describe('RadioButton.vue', () => {
  it('set checked radio input', async () => {
    const wrapper = mount(RadioButton, { props: { id: 'test', name: 'test', value: 'test' } })
    const radioInput = wrapper.find('input')

    await radioInput.setChecked()

    expect(radioInput.element.checked).toBeTruthy()
  })
})
