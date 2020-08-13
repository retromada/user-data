const { Schema } = require('../structures')
const { optionHandler } = require('../utils')

/**
 * @extends {Schema}
 */
module.exports = class Chance extends Schema {
  /**
   * @param {Function<Chance>} Chance A constructor/class that extends Chance
   * @param {DefaultOptions} options Options for the schema
   */
  constructor (Chance, options) {
    super(options)

    this.chance = new Chance()
  }

  prepareOptions (options = this.options) {
    this._gender = options.default('gender', ['male', 'female'])
    this._nationality = options.default('nationality', 'en')
  }

  name () {
    const [firstName, lastName] = this.chance.name({ gender: this._gender, nationality: this._nationality }).split(' ')

    return {
      first: firstName,
      last: lastName
    }
  }

  gender () {
    return this._gender
  }
}