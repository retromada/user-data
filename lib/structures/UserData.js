const Schemas = require('../schemas')
const { capitalize, mergeDefault, Constants } = require('../utils')

module.exports = class UserData {
  /**
   * @param {string} schemaName Name of the schema to be used
   * @param {*} declaration Declaration of the module with existing scheme to be used
   * @param {DefaultOptions} [options] Options for the schema
   */
  constructor (schemaName, declaration, options = {}) {
    if (typeof schemaName !== 'string') {
      throw new TypeError('USER_DATA_INVALID_PARAMETER', 'schemaName', 'a string')
    }

    this.schemaName = Constants.SchemaTypes[schemaName.toUpperCase()]

    if (typeof declaration === 'undefined') {
      throw new TypeError('USER_DATA_INVALID_PARAMETER', 'declaration')
    }

    this.options = mergeDefault(Constants.DefaultOptions, options)
    this.schema = new Schemas[capitalize(this.schemaName)](declaration, this.options)
  }

  /**
   * @param {number} [amount] Quantity of user data body to be generated
   * @returns {Promise<Object[]>} Generated user data
   */
  transform (amount) {
    return this.schema.transform(amount)
  }
}