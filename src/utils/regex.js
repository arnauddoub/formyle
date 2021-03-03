export function stipSpace(str) {
  return str.replace(/\s/g, '')
}

export function stripNaN(str) {
  return str.replace(/[^\d]/g, '')
}
