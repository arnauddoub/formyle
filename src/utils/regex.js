const stipSpace = (str) => {
  return str.replace(/\s/g, '')
}

const stripNaN = (str) => {
  return str.replace(/[^\d]/g, '')
}

export { stripNaN, stipSpace }
