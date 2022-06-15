var http=require('http');

var server=http.createServer(function (req,res) {

    res.write('File system module practice');
    res.end();

});

server.listen(3000);
console.log('server start successfully');