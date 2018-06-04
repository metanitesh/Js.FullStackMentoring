var express = require("express");
var app = express();
app.set('view engine', 'ejs');


app.use(express.static('public'))



app.get("/index.html", function(rew, res){

    res.send({
        text: "index"
    })
})



// app.get("/contact.html", function(req, res){
//     res.sendFile("/public/contact.html")
// })

app.listen(3000);