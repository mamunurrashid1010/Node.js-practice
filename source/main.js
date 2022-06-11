var http=require('http');

var server=http.createServer(function (req,res) {
   res.end("Hello Word! This is the first example of node.js")
});

server.listen(3000);
console.log("server run successfully");