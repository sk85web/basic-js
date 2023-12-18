const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = []
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  arr.map((item, index) => {
    if (item === '--double-next' && index !== arr.length - 1) {
      result.push(arr[index + 1])
      index++
    } else if (item === '--discard-prev') {
      result.pop(arr[index - 1])
      index++
    } else if (item === '--discard-prev') {
      result.pop(arr[index - 1])
      index++
    } else if (item === '--discard-next') {
      if (arr[index + 2] === '--discard-prev') {
        result.push(arr[index - 1])
      }
      delete arr[index]
      delete arr[index + 1]
      index++
    } else if (item === '--double-prev') {
      if (arr[index - 2] === '--double-next') {
        result.push(arr[index - 1])
      }
      index++
    } else result.push(item)
  })
  if (result[0] === '--double-prev') result.shift() // проверяю первый элемент
  if (result.at(-1) === '--double-next' || result.at(-1) === '--discard-next')
    // проверяю последний элемент
    result.pop()
  return result
}

module.exports = {
  transform,
}
