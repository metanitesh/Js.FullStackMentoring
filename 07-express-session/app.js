var express = require("express");
var app = express();

app.set('view engine', 'ejs');





// app.use(function(req, res, next){
//     // var data = {"name": "nitesh"};
//     // req.data = data;
//     console.log("in middle");
//     db.find(function(){

//     })
    
// })



app.use(function(req, res, next){
    
    // res.send("middle");
    // res.send("/todo")
    next();
})



app.get("/ejs/todos", function(req, res){

    res.render("todos", {data: [{id: 1, value: "breakfast"}, {id: 2, value: "lunch"}, {id: 3, value: "dinner"}] });
})


app.get("/", function(req, res){
    res.send("/")
});


app.get("/todo*", function(req, res){
    res.send("/todo*")
});


app.get("/todo", function(req, res){
    res.send("/todo")
});


app.get("*", function(req, res){
    res.status(400);
    res.send("bad request")
})


// app.get("/todos", function(req, res){

//     console.log(req.bodyChange);
//     var a = 10;

//     res.status(400)
//     res.send("bad request");
// });



// app.use( function(req, res, next){

//     req.bodyChange = "change";
//     // var data = {"name": "nitesh"};
//     // req.data = data;
//     console.log("in middle");
//     // db.find(function(){
        
//     // })
//     next();
    
// })



app.listen(3000);