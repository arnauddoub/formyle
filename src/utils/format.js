const formatEUR = (number) => {
  return readableNumber(number) + '\xa0€'
}

const readableNumber = (number) => {
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : number
}

const stripFirstZero = (str) => {
  return str.length >= 2 && str.charAt(0) === '0' ? str.substr(1) : str
}

export { formatEUR, readableNumber, stripFirstZero }
