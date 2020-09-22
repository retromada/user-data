const keyMirror = (array) => (object = {}, array.forEach((element) => object[element] = element), object)

/**
 * @typedef {Object} DefaultOptions
 * @property {string} [gender] Genre to be defined for the generated users
 * @property {string} [nationality] A {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2|ISO 3166-1 alpha-2} code of country to be defined for the generated users
 */
exports.DefaultOptions = {
  gender: undefined,
  nationality: undefined
}

/**
 * The type of schema for generating user data
 * * CHANCE
 * * FAKER
 * @typedef {string} SchemaType
 */
exports.SchemaTypes = keyMirror(['CHANCE', 'FAKER'])

/**
 * Domains of free email services
 * * gmail.com
 * * protonmail.com
 * * protonmail.ch
 * * outlook.com
 * * hotmail.com
 * * yahoo.com
 * * zoho.com
 * * aol.com
 * * aim.com
 * * gmx.com
 * * gmx.us
 * * icloud.com
 * * yandex.com
 * @typedef {string} EmailDomain
 */
exports.EmailDomains = [
  'gmail.com',
  'protonmail.com',
  'protonmail.ch',
  'outlook.com',
  'hotmail.com',
  'yahoo.com',
  'zoho.com',
  'aol.com',
  'aim.com',
  'gmx.com',
  'gmx.us',
  'icloud.com',
  'yandex.com'
]