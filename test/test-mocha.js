var expect  = require("chai").expect;
var request = require("request");

var baseUrl = "http://webdevbootcamp-javedmoham.c9users.io:8080";
describe("Hello World Server", function() {
    describe('GET /', function(){
        it('return error code 200', function(done){
           request(baseUrl, function(error, response, body) {
           expect(response.statusCode).to.equal(200);
           done();
           }); 
        });
    });
});