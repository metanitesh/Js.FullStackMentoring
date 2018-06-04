var http=require('http')
var server=http.createServer((function(request,response){

	console.log(request.url);

	response.writeHead(200,
	{"Content-Type" : "text/plain"});
	response.end("Hello World\n");
}));
server.listen(7000);

console.log("after ")

