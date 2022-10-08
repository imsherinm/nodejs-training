//module

//CommonJS, every file is module(bu default)
//Modules - Encapsulated Code(only share Minimum)
const names = require('./4-name')
const sayHi = require('./5-utils')
console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

