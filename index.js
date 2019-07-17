

// Dependencies

var http = require('http');
var url = require('url');
//the server should respond to all request with a const { StringDecoder } = require('string_decoder');
var server = http.createServer((req,res)=>{

//get the url and parse it

var parseUrl = url.parse(req.url,true);

//get the path
var path = parseUrl.pathname;
var trimmedPath = path.replace(/^\/+|\/+$/g,'');

//get the method
var method = req.method.toLowerCase();

//send the response
console.log("Hey it works");

//log the request path
console.log("request recieved on path:"+trimmedPath+" with method:"+method);

});
//start the server and listen to port 4000

server.listen(4000,(req,res)=>{
  console.log("Server is listening to port 4000");
});
