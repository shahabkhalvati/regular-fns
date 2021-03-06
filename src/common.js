const R = require('ramda')

const evaluateIf = R.curry(
  function (predicate, fn, defaultValue) {
    return R.ifElse(predicate, fn, R.always(defaultValue))
  })
const evaluateIfNot = R.curry(
  function (predicate, fn, defaultValue) {
    return R.ifElse(predicate, R.always(defaultValue), fn)
  })

const random = Math.random
const randomInRange = R.curry(
  (fractionDigits, min, max) => {
    const fractionMultiplier = Math.pow(10, fractionDigits)
    const result = Math.round(
      (Math.random() * (max - min) + min) * fractionMultiplier
    ) / fractionMultiplier
    return fractionDigits === 0 ? Math.floor(result) : result
  })

const randomIntInRange = randomInRange(0)
const randomInt = () => randomIntInRange(0, Number.MAX_SAFE_INTEGER)
const randomIntSmallerThan = randomIntInRange(0)
const randomIntLargerThan = randomIntInRange(R.__)(Number.MAX_SAFE_INTEGER)

export default {
  evaluateIf,
  evaluateIfNot,
  random,
  randomInt,
  randomInRange,
  randomIntInRange,
  randomIntLargerThan,
  randomIntSmallerThan
}
