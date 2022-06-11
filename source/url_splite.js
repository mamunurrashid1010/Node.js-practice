/*
 This is simple example of url split.
 Here i show how to split a url and get host name, path name, search query name
 */

var http =require('http');
var URL =require('url');

var server=http.createServer(function (req,res) {

    var testURL="http://127.0.0.1:8000/suppliers/due_payment_received/1?_token=9CpA58pqAh7C5c7gUHKE0eQZ7wkDwPyu68fsDHe5&store=1";
    var testUrlObj=URL.parse(testURL,true);
    var hostName=testUrlObj.host;
    var pathName=testUrlObj.pathname;
    var searchName=testUrlObj.search;

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(hostName+"<br>");
    res.write(pathName+"<br>");
    res.write(searchName+"<br>");
    res.end();
});

server.listen(3000);
console.log('server start successfully')