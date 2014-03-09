// web.js
var express = require("express");
var md  = require("markdown").markdown;
var app = express();
var fs=require('fs');

var files=['README','curso/texto/mas-usos'];
var routes= {};
for ( var f in files ) {
    var file_content = fs.readFileSync(files[f]+".md",'utf8');
    console.log(f);
    routes[files[f]] = md.toHTML(file_content);
    console.log(routes[f]);
}

app.get('/', function(req, res) {
	    console.log(routes['README']);
  res.send(routes['README']);
});

app.get('/:ruta', function(req, res) {
	    console.log("Request "+req.params.ruta);
	    if ( routes[req.params.ruta] ) {
		res.send(routes[req.params.ruta]);		
	    } else {
		res.send('Nostá',404);
	    }
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});