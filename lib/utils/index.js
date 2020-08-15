const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k)

module.exports = class Utils {
  /**
   * Choose a random value between two values
   * @param {number} min
   * @param {number} max
   * @returns {number}
   * @private
   */
  static between (min, max) {
    return ~~(Math.random() * (max - min + 1) + min)
  }

  /**
   * Pass the first letter of word to uppercase
   * @param {string} string Word that will change the first letter
   * @returns {string}
   * @private
   */
  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  /**
   * Sets default properties on an object that has not yet been specified
   * @param {Object} base Default properties
   * @param {Object} target Object to assign defaults to
   * @returns {Object}
   * @private
   */
  static mergeDefault (base, target) {
    if (!target) return base

    for (const key in base) {
      if (!has(target, key) || target[key] === undefined) {
        target[key] = base[key]
      } else if (target[key] === Object(target[key])) {
        target[key] = Utils.mergeDefault(base[key], target[key])
      }
    }

    return target
  }

  /**
   * @param {Object} [options]
   * @private
   */
  static optionHandler (options = {}) {
    return ({
      default (name, defaultValue) {
        const value = options[name]

        return typeof value === 'undefined'
          ? Array.isArray(defaultValue)
            ? Utils.random(defaultValue)
            : defaultValue
          : value
      }
    })
  }

  /**
   * Choose a random item from an array
   * @param {Array} array
   * @private
   */
  static random (array) {
    return Array.isArray(array) && array.length ? array[~~(Math.random() * array.length)] : array
  }
}

module.exports.Constants = require('./Constants.js')