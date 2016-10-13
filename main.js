'use strict'
const lib = require('./lib')
const employee = lib.employee
const underlings = lib.underlings
const names = lib.names

const brad = employee('brad')

const frank = employee('frank', brad)
const peter = employee('peter', frank)
const michael = employee('michael', frank)
const dillon = employee('dillon', frank)

const ed = employee('ed', brad)
const mandy = employee('mandy', ed)
const chris = employee('chris', ed)

const employees = [
  brad,
  frank,
  ed,
  peter,
  michael,
  dillon,
  mandy,
  chris
]

console.log(`brad's underlings: ${JSON.stringify(names(underlings(brad, employees)), null, 2)}`)
console.log(`frank's underlings: ${JSON.stringify(names(underlings(frank, employees)), null, 2)}`)
console.log(`ed's underlings: ${JSON.stringify(names(underlings(ed, employees)), null, 2)}`)
