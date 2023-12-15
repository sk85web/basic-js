const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const indexOfSymbol = email.lastIndexOf('@') + 1
  const res = email.slice(indexOfSymbol, email.length)
  return res
}

module.exports = {
  getEmailDomain,
}
