const integer = require('./integer.js')

/**
 * Generates a random natural
 * @param {Object} [options] Natural generation options
 * @param {number} [options.min=0] Minimum natural number
 * @param {number} [options.max=9007199254740991] Maximum natural number
 * @returns {number}
 */
function natural (
  {
    min = 0,
    max = Number.MAX_SAFE_INTEGER
  } = {}
) {
  if (min < 0) {
    throw new Error('Min cannot be less than zero')
  }

  return integer({ min, max })
}

module.exports = natural