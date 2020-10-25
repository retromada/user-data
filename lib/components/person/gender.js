const pick = require('../helper/pick.js')

/**
 * Generates a random gender
 * @returns {string}
 */
function gender () {
  return pick(['male', 'female'])
}

module.exports = gender