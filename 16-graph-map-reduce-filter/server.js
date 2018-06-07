var express = require("express");
var app = express();
var graphApi = require("./graph-four.js");



app.use(express.static("public"));


// app.get("/", function(req, res){
// 	res.send("test");
// })

app.listen(3000)