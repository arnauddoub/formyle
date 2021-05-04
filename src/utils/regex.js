/**
 * @param {string} str
 * @returns {string}
 */
export function stripSpace(str) {
  return str.replace(/\s/g, '')
}

/**
 * @param {string} str
 * @returns {string}
 */
export function stripNaN(str) {
  return str.replace(/[^\d]/g, '')
}
