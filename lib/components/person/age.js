const natural = require('../basic/natural.js')

/**
 * Generates a random age
 * @param {Object} [options] Options for age generation
 * @param {string} [options.type] Age group name
 * @return {number}
 */
function age (
  {
    type = undefined
  } = {}
) {
  let range

  switch (type) {
    case 'child':
      range = { min: 0, max: 12 }
      break
    case 'teen':
      range = { min: 13, max: 19 }
      break
    case 'adult':
      range = { min: 18, max: 65 }
      break
    case 'senior':
      range = { min: 65, max: 100 }
      break
    case 'all':
      range = { min: 0, max: 100 }
      break
    default:
      range = { min: 18, max: 65 }
      break
  }

  return natural(range)
}

module.exports = age