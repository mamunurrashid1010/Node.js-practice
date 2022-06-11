/*
 This is simple example of request and response.
 Here i show how to work request & response
 */

var http=require('http');

var server=http.createServer(function (req,res) {
    
    if (req.url=='/') {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('This is Home page');
        res.end();
    }
    else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is about page');
        res.end();
    }
    else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is contact page');
        res.end();
    }
});

server.listen(3000);
console.log('server start successfully');