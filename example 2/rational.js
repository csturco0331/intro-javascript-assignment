'use strict'

function rational (n, d) {
  return {
    get numerator () { return n },
    get denominator () { return d },
    add: r => rational(n * r.denominator + r.numerator * d, d * r.denominator),
    mul: r => rational(n * r.numerator, d * r.denominator),
    inverse: () => rational(d, n)
  }
}

const rat = rational(1, 2)
const wholeRat = rat.add(rational(1, 2))
console.log(wholeRat.numerator + '/' + wholeRat.denominator)
