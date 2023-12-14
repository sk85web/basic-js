const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(n.toString())

  let result = []
  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr.slice()
    currentArr.splice(i, 1)
    result.push(+currentArr.join(''))
  }
  return Math.max.apply(null, result)
}

module.exports = {
  deleteDigit,
}
