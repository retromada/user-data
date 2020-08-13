const { mergeDefault, optionHandler, Constants } = require('../utils')

module.exports = class Schema {
  /**
   * @param {DefaultOptions} [options] Options for the schema
   */
  constructor (options = {}) {
    this.options = mergeDefault(Constants.DefaultOptions, options)
    this.options = optionHandler(this.options)

    this.fields = [
      'name',
      'gender'
    ]
  }

  setup () {
    return true
  }

  /**
   * @param {number} [amount=1] Quantity of user data body to be generated
   * @returns {Promise<Object[]>} Generated user data
   */
  transform (amount = 1) {
    if (isNaN(amount)) throw new TypeError('SCHEMA_TRANSFORM_INVALID_PARAMETER', 'amount', 'a number')

    return new Promise((resolve) => resolve(
      Array(amount > 0 ? amount : 1)
        .fill()
        .map(() => (
          this.setup(),
          object = {},
          this.fields.map((field) => object[field] = this[field]()),
          object
        ))
    ))
  }
}