const { Schema } = require('../structures')
const { between, optionHandler, random, Constants } = require('../utils')

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

  setup (options = this.options) {
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

  birthday () {
    const thisYear = new Date().getFullYear()
    const year = this.chance.year({ min: thisYear - 45, max: thisYear - 18 })

    return {
      date: this.chance.birthday({ year }),
      age: thisYear - year
    }
  }

  location (chance = this.chance) {
    const [addressNumber, ...addressName] = chance.address().split(' ')

    return {
      address: {
        number: addressNumber,
        name: addressName.join(' ')
      },
      street: chance.street(),
      city: chance.city(),
      state: chance.state({ full: true }),
      country: chance.country({ full: true }),
      coordinates: {
        latitude: chance.latitude(),
        longitude: chance.longitude()
      },
      timezone: chance.timezone()
    }
  }

  email () {
    return this.chance.email({
      length: between(11, 15),
      domain: random(Constants.EmailDomains)
    })
  }

  phone () {
    return this.chance.phone()
  }
}