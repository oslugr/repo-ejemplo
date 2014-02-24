// var should = require('should'); 

var request = require('supertest');  
var port = Number(process.env.PORT || 5000);
request=request("http://localhost:"+port);

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
		      })
});
