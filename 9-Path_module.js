/*
Built-In Modules (OS Module)
OS Module Methods:-
*/
const path = require('path')

console.log(path.sep)// Path separators are used to separate directories and files in a file path
// On Windows, the path separator is a backslash (\). <our case>
// On Unix-like systems (Linux, macOS), the separator is a forward slash (/).

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath); // \content\subfolder\test.txt
// used to join multiple path segments into a single path.
// It automatically handles different path separators based on the operating system

const base = path.basename(filePath)
console.log(base);// text.txt
// used to extract the last part (or "base name") of a path

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);// E:\BackEnd\node\content\subfolder\test.txt
console.log(path.resolve('content','subfolder','test.txt'));// E:\BackEnd\node\content\subfolder\test.txt
// Resolves a sequence of path segments into an absolute path
