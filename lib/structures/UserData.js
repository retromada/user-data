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
    this.schema = new Schemas[capitalize(this.schemaName.toLowerCase())](declaration, this.options)
  }

  /**
   * @param {...string} fields The fields to add
   * @returns {Schema}
   */
  addFields (...fields) {
    return this.schema.addFields(...fields)
  }

  /**
   * @param {...string} fields The fields to remove
   * @returns {Schema}
   */
  removeFields (...fields) {
    return this.schema.removeFields(...fields)
  }

  /**
   * @param {...string} properties The properties to be removed from the data body
   * @returns {Schema}
   */
  removeProperties (...properties) {
    return this.schema.removeProperties(...properties)
  }

  /**
   * @param {number} [amount] Quantity of user data body to be generated
   * @returns {Promise<Object[]>} Generated user data
   */
  transform (amount) {
    return this.schema.transform(amount)
  }
}