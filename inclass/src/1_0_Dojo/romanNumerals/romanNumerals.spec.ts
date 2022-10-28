import { romanNumbers } from './romanNumerals'

describe('Testing basic roman numerals conversion', () => {

  it('should return empty string if 0', () => {
    expect(romanNumbers(0)).toBe('')
  })

  it('should return empty string if negative', () => {
    expect(romanNumbers(-1)).toBe('')
  })

  it('should return I', () => {
    expect(romanNumbers(1)).toBe('I')
  })

  it('should return V', () => {
    expect(romanNumbers(5)).toBe('V')
  })

  it('should return X', () => {
    expect(romanNumbers(10)).toBe('X')
  })

  it('should return C', () => {
    expect(romanNumbers(100)).toBe('C')
  })

  it('should return D', () => {
    expect(romanNumbers(500)).toBe('D')
  })

  it('should return M', () => {
    expect(romanNumbers(1000)).toBe('M')
  })
})

describe('Testing advanced roman numerals conversion', () => {
  it('Testing 11', () => {
    expect(romanNumbers(11)).toBe('XI')
  })

  it('Testing 75', () => {
    expect(romanNumbers(75)).toBe('LXXV')
  })

  it('Testing 90', () => {
    expect(romanNumbers(90)).toBe('XC')
  })

  it('Testing number > 100', () => {
    expect(romanNumbers(120)).toBe('CXX')
  })

  it('Testing >500 number', () => {
    expect(romanNumbers(510)).toBe('DX')
  })

  it('Testing a >200 but < 300', () => {
    expect(romanNumbers(290)).toBe('CCXC')
  })

  it('Testing vegeta', () => {
    expect(romanNumbers(777)).toBe('DCCLXXVII')
  })
})