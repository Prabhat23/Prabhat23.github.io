var http = require('http')

var server=http.createServer(function(req,res){
    res.writeHead(200,{"contentType":"text/html"})
    var name="prabhat"
    var year=2016
    var dept="mca"
    res.write("name of student"+name+"dept"+dept+" year"+year)
    res.end("")
})

server.listen(1338)