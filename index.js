var express = require('express')
app = express();



app.get("/", function (req, res) {
    res.send("Home Page");
});

app.post("/about", function (req, res) {
    res.send("About Page");
});


app.put("/contact", function (req, res) {
    res.send("Contact Page");
});


app.post("/terms", function (req, res) {
    res.send("Terms Page");
});

app.get("/three", function(req,res){
    res.status(401).end("Unauthorized!");
});

app.get("/four", function(req,res){
    let MyObj = [
        {
        name: "AKIB",
        City: "Chattogram",
        Country: "Bangladesh"
        },
        {
        name: "AKIB",
        City: "Chattogram",
        Country: "Bangladesh"
        },
        ]
    res.json(MyObj);
});

app.get("/five", function(req,res){
    res.download("./uploads/akib.jpg");
});



app.listen(8080, function () {
    console.log("Server is running");
});