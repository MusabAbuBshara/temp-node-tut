// local
const secret = 'SUPER SECRET'
// (shared)
const musab = 'musab'
const fakhri = 'fakhri'

// testing the role (when you import a module you actually invoke it)
console.log(`testing the role (when you import a module you actually invoke it) from module 4`);


module.exports = {musab , fakhri}

// console.log(module);
/*
{
  id: '.',
  path: 'E:\\BackEnd\\node',
  exports: {}, // ***there is no expoted modules here***
  filename: 'E:\\BackEnd\\node\\4-name_module.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\BackEnd\\node\\node_modules',
    'E:\\BackEnd\\node_modules',
    'E:\\node_modules'
  ]
}
*/