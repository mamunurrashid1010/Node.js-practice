/*
 * NodeJs file system module
 * readFileSync() function
 * this is the example of how to read a file (using Sync) using node.js file system module
 */
var http=require('http');
var fs=require('fs');

var server=http.createServer(function (req,res) {

    if(req.url=='/'){
        var data=fs.readFileSync('home.html');
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
    }

});

server.listen(3000);
console.log('server start successfully');