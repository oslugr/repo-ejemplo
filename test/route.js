// var should = require('should'); 

var request = require('supertest');  
// hay que arrancar el servidor antes. Más adelante probaremos esto http://51elliot.blogspot.com.es/2013/08/testing-expressjs-rest-api-with-mocha.html

var server=require(__dirname + '/../web.js');
var port = Number(process.env.PORT || 5000);
request=request("http://localhost:"+port);

describe('Web', function(){

	     it('Debería devolver la raíz', function(){
		    request.get("/")
			.expect(200)
			.end(function(err,res) {
				 if (err) {
				     throw err ;
				 }
			     });
		});

	     

	     it('Debería devolver uso_basico', function(){
		    request.get("/curso/texto/uso_basico")
			.expect(200)
			.end(function(err,res) {
				 if (err) {
				     throw err ;
				 }
			     });
		});

	     
	     it('Debería devolver una imagen', function(){
		    request.get("/img/wingit1.png")
			.expect(200)
			.end(function(err,res) {
				 if (err) {
				     throw err ;
				 }
			     });
		});

	     
	     it('Debería devolver una imagen ', function(){
		    request.get("/curso/texto/img/wingit2.png")
			.expect(200)
			.end(function(err,res) {
				 if (err) {
				     throw err ;
				 }
			     });
		});





});

