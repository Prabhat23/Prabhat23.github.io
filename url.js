/**
 * Created by student on 6/11/2016.
 */
var http = require('http')
var url =require('url');
var server=http.createServer(function(req,res) {
    var page = url.parse(req.url).pathname

    res.writeHead(200, {"contentType": "text/html"})
    if (page == "/login") {
        res.write("welcome" + page)
    }
    else if (res == "signup") {
        res.write("hi" + page)
    }
    else {
    res.write("Welcome")
}
        res.end("")
})
        server.listen(1338)
server.close();

