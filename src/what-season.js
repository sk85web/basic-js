const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw new Error('Invalid date!')
  Object.getOwnPropertyNames(date).forEach((method) => {
    switch (method) {
      case 'toString':
      case 'getMonth':
      case 'getFullYear':
      case 'getDate':
      case 'getHours':
      case 'getMinutes':
      case 'getSeconds':
      case 'getMilliseconds':
      case 'getDay':
        throw new Error('Invalid date!')
        break
    }
  })

  const monthFromDate = date.getMonth().toString().padStart(2, 0)
  if (
    monthFromDate === '11' ||
    monthFromDate === '00' ||
    monthFromDate === '01'
  )
    return 'winter'
  else if (
    monthFromDate === '02' ||
    monthFromDate === '03' ||
    monthFromDate === '04'
  )
    return 'spring'
  else if (
    monthFromDate === '05' ||
    monthFromDate === '06' ||
    monthFromDate === '07'
  )
    return 'summer'
  else if (
    monthFromDate === '08' ||
    monthFromDate === '09' ||
    monthFromDate === '10'
  )
    return 'autumn'
}

module.exports = {
  getSeason,
}
