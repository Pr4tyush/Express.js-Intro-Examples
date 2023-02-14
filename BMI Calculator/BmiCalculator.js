const express = require("express");

const bodyParser = require("body-parser");



const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response){
    response.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",function(request,response){

var Height = Number(request.body.Height);
var Weight = Number(request.body.Weight); // I have to put in Number because it accepts as str and append insted of adding
var result = Math.floor(Weight/(Height*Height));

    response.send("Your BMI is: "+result);
});

app.listen(3000,function(){
    console.log("Server started at on port 3000");
});


