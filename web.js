// web.js
var express = require("express");
var md  = require("markdown").markdown;
var app = express();
var fs=require('fs');

var files=['README','curso/texto/mas_usos', 'curso/texto/introduccion', 'curso/texto/uso_basico', 'curso/texto/solucion_problemas'];
var routes= {};
for ( var f in files ) {
    var file_content = fs.readFileSync(files[f]+".md",'utf8');
//    console.log('Leyendo ' + files[f]);
    routes[files[f]] = md.toHTML(file_content);
}

app.get('/', function(req, res) {
//	    console.log('README');
	    res.send(routes['README']);
});

app.get('/curso/texto/:ruta', function(req, res) {
//	    console.log("Request "+req.params.ruta);
	    var ruta_toda = "curso/texto/"+req.params.ruta;
	    if ( routes[ruta_toda] ) {
		res.send(routes[ruta_toda]);		
	    } else {
		res.send('Nostá '+ ruta_toda,404);
	    }
});

var port = Number(process.env.PORT || 5000);
var server = app.listen(port);


exports.server=server; // For testing