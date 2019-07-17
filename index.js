

// Dependencies

var http = require('http');

//the server should respond to all request with a const { StringDecoder } = require('string_decoder');

var server = http.createServer((req,res)=>{
  res.end("Hello world");
});

//start the server and listen to port 4000

server.listen(4000,(req,res)=>{
  console.log("Server is listening to port 4000");
});
