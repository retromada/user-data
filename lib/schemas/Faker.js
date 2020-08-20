const { Schema } = require('../structures')
const { random, Constants } = require('../utils')

/**
 * @extends {Schema}
 */
module.exports = class Faker extends Schema {
  /**
   * @param {Function<Faker>} Faker A constructor/class that extends Faker
   * @param {DefaultOptions} options Options for the schema
   */
  constructor (Faker, options) {
    super(options)

    this.faker = Faker
    this.fields = [
      'name',
      'gender',
      'location',
      'email',
      'phone'
    ]
  }

  setup(options = this.options) {
    this._gender = options.default('gender', ['male', 'female'])

    this.firstName = this.faker.name.firstName(this._gender)
    this.lastName = this.faker.name.lastName(this._gender)
  }

  name () {
    return {
      first: this.firstName,
      last: this.lastName
    }
  }

  gender () {
    return this._gender
  }

  location (location = this.faker.address) {
    return {
      address: {
        number: this.faker.random.number({ min: 1, max: 500 }),
        name: location.secondaryAddress()
      },
      street: location.streetName(),
      city: location.city(2),
      state: location.state(),
      country: location.country(),
      coordinates: {
        latitude: location.latitude(),
        longitude: location.longitude()
      },
      timezone: {}
    }
  }

  email () {
    return this.faker.internet.email(this.firstName, this.lastName, random(Constants.EmailDomains))
  }

  phone () {
    return this.faker.phone.phoneNumber()
  }
}