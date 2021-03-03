export function formatEUR(number) {
  return readableNumber(number) + '\xa0€'
}

export function readableNumber(number) {
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : number
}

export function stripFirstZero(str) {
  return str.length >= 2 && str.charAt(0) === '0' ? str.substr(1) : str
}
