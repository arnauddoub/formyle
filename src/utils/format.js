/**
 * @param {int} number
 * @returns {string}
 */
export function formatEUR(number) {
  return readableNumber(number) + '\xa0€'
}

/**
 * @param {int} number
 * @returns {string}
 */
export function readableNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

/**
 * @param {string} str
 * @returns {string}
 */
export function stripFirstZero(str) {
  return str.length >= 2 && str.charAt(0) === '0' ? str.substr(1) : str
}
