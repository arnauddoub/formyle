import { stripSpace, stripNaN } from '@/utils/regex'

describe('Utils:regex', () => {
  it('stripSpace', () => {
    expect(stripSpace('10 0 00 0')).toBe('100000')
  })

  it('stripNaN', () => {
    expect(stripNaN('10a0b0c 00')).toBe('100000')
  })
})
