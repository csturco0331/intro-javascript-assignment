'use strict'

const nat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

nat
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .forEach(n => console.log(n))
