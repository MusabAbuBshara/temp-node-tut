/*
Built-In Modules (FS <Sync> Module) [Blocking]
FS <Sync> Module Methods:-
  1- readFileSync(<path>,<encoding>) : Reads the contents of a file synchronously
  2- writeFileSync(<path>,<data>,<optionsObject>) : Writes data to a file synchronously,
    replacing the file if it [already exists]
    <optionsObject> : flag =>  ('w' <default> : overwrite)  ('a' : write at the end )
*/
const {readFileSync , writeFileSync} = require('fs') 
// destructing these methods from fs module to use it directly

/* 
const fs = require('fs')
fs.readFileSync()
// same as above
*/

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,'#',second)

writeFileSync('./content/result-sync.txt',`Here is the result : ${first} , ${second}`)
// Hello this is first text file # Hello this is second text file

console.log(readFileSync('./content/result-sync.txt','utf-8'))
//Here is the result : Hello this is first text file , Hello this is second text file

writeFileSync('./content/result-sync.txt',`Overwriting`,{flag:'w'})

console.log(readFileSync('./content/result-sync.txt','utf-8')) // Overwriting

writeFileSync('./content/result-sync.txt',` updating`,{flag:'a'})

console.log(readFileSync('./content/result-sync.txt','utf-8')) //Overwriting updating