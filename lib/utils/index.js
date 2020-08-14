const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k)

module.exports = class Utils {
  static between (min, max) {
    return ~~(Math.random() * (max - min + 1) + min)
  }

  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

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

  static random (array) {
    return Array.isArray(array) && array.length ? array[~~(Math.random() * array.length)] : array
  }
}

module.exports.Constants = require('./Constants.js')