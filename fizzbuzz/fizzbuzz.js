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
  [...range(config.from, config.until)].map(item => console.log(`${item}: ` + config.factors.map(factor => !(item % factor[0]) ? factor[1] : '').join('')))
}

// test
fizzbuzz(config)
