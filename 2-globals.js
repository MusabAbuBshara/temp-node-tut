/*
Globals:- (No Window Object because there is no browser)
  1- __dirname : path to current directory
  2- __filname : file name
  3- require() : function to use modules (CommonJS)
  4- module    : info about current module (file)
  5- process   : info about environment where the program is being excuted
*/
console.log(__dirname); // E:\BackEnd\node
setInterval(() => {
  console.log("hellow");
}, 1000);
