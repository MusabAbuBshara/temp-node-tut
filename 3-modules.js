// CommonJs, every file is module (by default)
// Modules : Encapsulated Code (only share minimum <what he need to share>)
const names = require('./4-name_module')
const sayHi = require('./5-utils_module')
// const {I,P} = require('./6-atrernative_flavor_module') wrong
const {items,singlePerson} = require('./6-atrernative_flavor_module')
require('./7-mind-grenade') // the sum is 15 (it invoked the code in the module)
// *** when you import a module you actually invoke it ***

console.log(names) // { musab: 'musab', fakhri: 'fakhri' }
console.log(items) // [ 'item1', 'item2' ]
console.log(singlePerson) // { name: 'bob' }
sayHi('naser')
sayHi(names.musab)
sayHi(names.fakhri)