//npm init (step by step, press to skip)
//npm init -y (default install)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)