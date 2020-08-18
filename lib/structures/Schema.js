const { mergeDefault, optionHandler, removeProperties, Constants } = require('../utils')

module.exports = class Schema {
  /**
   * @param {DefaultOptions} [options] Options for the schema
   */
  constructor (options = {}) {
    this.options = mergeDefault(Constants.DefaultOptions, options)
    this.options = optionHandler(this.options)

    this.fields = [
      'name',
      'gender',
      'birthday',
      'location',
      'email',
      'phone'
    ]

    this.ignoreProperties = []
  }

  setup () {
    return true
  }

  /**
   * @param {...string} fields The fields to add
   * @returns {Schema}
   */
  addFields (...fields) {
    this.fields.push(...fields)
    return this
  }

  /**
   * @param {...string} fields The fields to remove
   * @returns {Schema}
   */
  removeFields (...fields) {
    this.fields = this.fields.filter((field) => !fields.includes(field))
    return this
  }

  /**
   * @param {...string} properties The properties to be removed from the data body
   * @returns {Schema}
   */
  removeProperties (...properties) {
    this.ignoreProperties.push(...properties)
    return this
  }

  /**
   * @param {number} [amount=1] Quantity of user data body to be generated
   * @returns {Promise<Object[]>} Generated user data
   */
  transform (amount = 1) {
    if (isNaN(amount)) {
      throw new TypeError('SCHEMA_TRANSFORM_INVALID_PARAMETER', 'amount', 'a number')
    }

    return new Promise((resolve) => resolve(removeProperties(Array(amount > 0 ? amount : 1).fill().map(() => this._fieldsMap())), this.ignoreProperties))
  }

  /**
   * @private
   */
  _fieldsMap (data = {}) {
    this.setup()
    this.fields.forEach((field) => data[field] = this[field]())

    return data
  }
}