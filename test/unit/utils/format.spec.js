import { formatEUR, readableNumber, stripFirstZero } from '@/utils/format'

describe('Utils:format', () => {
  it('readableNumber', () => {
    expect(readableNumber(100000)).toBe('100 000')
  })

  it('formatEUR', () => {
    expect(formatEUR(100000)).toBe('100 000 €')
  })

  it('stripFirstZero', () => {
    expect(stripFirstZero('0100')).toBe('100')
  })
})
