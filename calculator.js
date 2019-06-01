const express = require("express");
const app = express();

const port = 3000;

const htmlFile = __dirname + "/index.html";

app.get("/", function(req, res){
res.sendFile(htmlFile);
});

app.listen(port, function(){
	console.log("App listening on port 3000")
});
