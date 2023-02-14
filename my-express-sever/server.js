const express = require("express");

const app = express();
app.get("/",function(request,response){
    response.send("<h1>Hello There</h1>");
});

app.get("/contact",function(req,res){
    res.send("<h1>Contact me at: myself.pratyush@outlook.com</h1>");
});

app.get("/about",function(req,res){
    res.send("<h1>Hello My name is Pratyush.I am Pursuing Btech From NIET and a Aspiring DataScientist and a Webdevloper</h1>")
})

app.get("/hobby",function(req,res){
    res.send("<h1>Hobby is all about Coding</h1>")
})
app.listen(3000,function(){
    console.log("Server started at on port 3000");
});


