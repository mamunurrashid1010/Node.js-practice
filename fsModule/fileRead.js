/*
 * NodeJs file system module
 * * readFile() function is a Asynchronous function.
 * this is the example of how to read a file (using Async) using node.js file system module
 */
var http=require('http');
var fs=require('fs');

var server=http.createServer(function (req,res) {

    if(req.url=='/'){
        fs.readFile('home.html',function (error,data) {
           res.writeHead(200,{'content-type':'text/html'});
           res.write(data);
           res.end();
        });
    }

});

server.listen(3000);
console.log('server start successfully');