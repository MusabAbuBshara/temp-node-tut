/*
Built-In Modules (FS <Async> Module) [Non-blocking]
FS <Async> Module Methods:-
  1- readFile(<path>,<encoding> , callback) : Reads the contents of a file Asynchronously
  2- writeFile(<path>,<data>,<optionsObject>,callback) : Writes data to a file Asynchronously,
    replacing the file if it [already exists]
    <optionsObject> : flag =>  ('w' <default> : overwrite)  ('a' : write at the end )
*/
const {readFile , writeFile} = require('fs')
const {readFileSync , writeFileSync} = require('fs')


const firstSync = readFileSync('./content/first.txt','utf8')
const firstAsync = readFile('./content/first.txt' , 'utf8' ,(err,result) => {
  if(err){
    console.log(err);
    return
  }
  const first = result
  console.log(first);// Hello this is first text file
  readFile('./content/second.txt' , 'utf8' , (err,result) => {
    if(err){
      console.log(err);
      return
    }
    const second = result
    console.log(second);// Hello this is second text file
    writeFile('./content/result-async.txt',`Here is the result : ${first} , ${second}`,(err,result) => {
      if(err){
        console.log(err);
        return
      }
      console.log(result);// undefined (because we aree not expecting anything back)
    })
  })
})

console.log(firstSync) // Hello this is first text file
console.log(firstAsync) // undefined

readFile('./content/first.txt' , (err,result) => {
  if(err){
    console.log(err);
    return
  }
  console.log(result);
  // out: <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
  // because we didn't providee utf-8 coding
})

/*
the whole output [order]: (First all Sync operations done then it comes to the Async operations)
Hello this is first text file
undefined
Hello this is first text file
<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
Hello this is second text file
undefined

output flow:
firstSync => firstAsync => readFile(first) => readFile(first no utf8)
  => readFile(second) => writeFile(result)
*/