const express = require("express");

const bodyParser = require("body-parser");



const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
});
app.post("/",function(request,response){

var num1 = Number(request.body.num1);
var num2 = Number(request.body.num2); // I have to put in Number because it accepts as str and append insted of adding
var result = num1+num2;

    response.send("The result off adding two numbers are: "+result);
});

app.listen(3000,function(){
    console.log("Server started at on port 3000");
});


