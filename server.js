var http = require('http')

    var server=http.createServer(function(req,res){
        res.writeHead(200,{"contentType":"text/html"})

        res.write(
        "<!DOCTYPE html>"+
         "<head>"+
        "<title>"+
              "Registrations open"+
             
       "</title>"+
        "<h1>"+
        "Sample Login Form"+
        "</h1>"+
        "</head>"+
        "<body>"+
        "<form>"+
        "first name:"+"<input type='text'>"+
        "<br>"+
              "last name:"+"<input type='text'>"+
        "<br>"+
        "<button type='button'>"+
        "Submit"+
        "</button>"+
              
              
              
              
             " </form>"+
           
            
              
              "</body>"+
              
              "</html>")
              res.end("")

})

server.listen(1338)