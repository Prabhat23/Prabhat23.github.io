/**
 * Created by student on 6/11/2016.
 */
var http = require('http')
var url =require('url');
var server=http.createServer(function(req,res) {
    res.writeHead(200, {"contentType": "text/html"})
    res.write('hello server');
    })
    server.on('close',function () {
        console.log("server closed");
    });
    server.listen(1338);
server.close();
