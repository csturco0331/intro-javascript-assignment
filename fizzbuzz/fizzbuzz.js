'use strict'

const range = function * (from, until) {
  for (let n = from; n < until; n++) {
    yield n
  }
}

const config = {
  from: 20,
  until: 40,
  factors: [
    [2, 'pezz'],
    [3, 'fizz'],
    [5, 'buzz'],
    [7, 'cozz']
  ]
}

function fizzbuzz (config) {
  console.log([...range(config.from, config.until)].map(item => [item, config.factors.map(factor => item % factor[0] === 0 ? factor[1] : '').join('')]))
}

// test
fizzbuzz(config)

const string = 'token'
console.log('This is a %s example', string)
console.log(`This is a ${string} example`)
