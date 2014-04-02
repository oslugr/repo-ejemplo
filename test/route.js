// var should = require('should'); 

var request = require('supertest');  
// hay que arrancar el servidor antes. Más adelante probaremos esto http://51elliot.blogspot.com.es/2013/08/testing-expressjs-rest-api-with-mocha.html
var port = Number(process.env.PORT || 5000);
request=request("http://localhost:"+port);
var rutas=['curso/texto/mas-usos', 'curso/texto/Introduccion', 'curso/textos/uso_basico'];

describe('Rutas', function(){
	     describe('/', function(){
			  it('Debería devolver la web', function(){
				 request.get("/")
				     .expect(200)
				     .end(function(err,res) {
					      if (err) {
						  throw err ;
					      }
					  })
			     })
		      });
});

for ( var i in rutas ){
    describe('Página ' + rutas[i], function(){
		 it('Debería devolver la página '+rutas[i], function(){
			request.get("/"+rutas[i])
			    .expect(200)
			    .end(function(err,res) {
				     if (err) {
					 throw err ;
				     }
				 })
		    })
	     });
}

