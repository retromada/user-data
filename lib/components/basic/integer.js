/**
 * Generates a random integer
 * @param {Object} [options] Integer generation options
 * @param {number} [options.min=-9007199254740991] Minimum integer
 * @param {number} [options.max=9007199254740991] Maximum integer
 * @returns {number}
 */
function integer (
  {
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER
  } = {}
) {
  if (min > max) {
    throw new Error('Min cannot be greater than max')
  }

  return ~~(Math.random() * (max - min + 1) + min)
}

module.exports = integer