/*
Built-In Modules (HTTP Module)
HTTP Module Methods:-
*/
const http = require('http')
const server = http.createServer((req,res) => {
  // console.log(req)
  // res.write('Welcome to our home page')
  // res.end() // ending the response
  if (req.url === '/') { // base endpoint
    res.end('Welcome to our home page')
  }
  if (req.url === '/about') { // about endpoint
    res.end('Here is our short history')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page the page you are looking for</p>
    <a href="/">home page</a>
    `)
})

server.listen(5000)// by typing localhost:5000 on the browser this server wep page will open
// it makes the server that I just created get data(requests) from specific port(5000)