var express = require('express');
var app = express();


app.get("/", (req, res) =>{
    res.send("hello world");

})



const port = 3000;

app.listen(port, function(){
    console.log(`application is listening on port ${port}`)
});


module.exports = app;