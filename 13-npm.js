/*
  npm - global command comes with node (when you download node)
  command: npm --version / --v

  a) local dependency : use it only in this particular project [Recomended]
  command: npm i <packageName>
  
  b) global dependency : use it in any project
  command: npm install -g <packageName>
  ** command: sudo npm install -g <packageName> (mac)

  package.json : manifest file (stores important info about project/package)
  a) manual approach (create package.json in the root, creat properties etc)
  b) command: npm init (step by step, press enter to skip)
  c) command: npm init -y (does everything by default)
*/

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) // [ 1, 2, 3, 4 ]
