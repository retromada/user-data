const natural = require('../basic/natural.js')

/**
 * Pick an item at random from the array
 * @param {array} array Items to choose from
 */
function pick (array) {
  if (array && !array.length) {
    throw new RangeError('Cannot pick one from an empty array')
  }

  return array[natural({ max: array.length - 1 })]
}

module.exports = pick