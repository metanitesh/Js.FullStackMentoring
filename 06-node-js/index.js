var http = require("http");
var fs = require("fs");


http.createServer(function(req, res){

    
    console.log(req);
    if(req.url === "/about"){
        

        fs.readFile("about.html", function(err, data){
            res.end(data.toString());
        })

        // res.end("some");
        


    }


    

}).listen(5000);
