'use strict'

function employee (name, manager) {
  return {
    name: name,
    manager: manager
  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */
function underlings (manager, employees) {
  const result = []
  for (let elem of employees) {
    if (elem.manager === manager) {
      result.push(elem)
    }
  }
  return result
}

function names (employees) {
  const result = []
  for (let elem of employees) {
    result.push(elem.name)
  }
  return result
}

module.exports = {
  employee,
  underlings,
  names

}
