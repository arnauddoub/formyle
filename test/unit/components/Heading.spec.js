import { mount } from '@vue/test-utils'
import Heading from '@/components/heading'

describe('Heading.vue', () => {
  it('should display header text', () => {
    const msg = 'This is a title with an h1 tag'
    const wrapper = mount(Heading, { props: { size: 1 }, slots: { default: msg } })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})
