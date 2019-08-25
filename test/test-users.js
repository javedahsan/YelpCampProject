var chai = require("chai"),
    chaiHttp = require("chai-http"),   
    mongoose   = require("mongoose"),
    should = chai.should(),
    expect = chai.expect,
    cheerio = require("cheerio"),
    baseUrl = "http://localhost:8626";

    chai.use(chaiHttp);

describe('YelpCamp - Users', function(){
  it("should display New user page on /register GET", function(done){
            chai.request(baseUrl)
                .get('/register')
                .end(function(err, res){
                    if(err) throw err;
                    // expect(err).to.be.a('null');
                    // expect(res).to.not.be.a('null');
                    res.should.have.status(200);
                    // console.log("User:", res.text);
                    res.text.should.contain('<title>YelpCamp</title>');
                    res.text.should.match(/<h1>Sign Up!<\/h1>/);
                    var result = getParams(res.text);
                    result[0].should.include({type: 'text', name: 'username', placeholder: 'username'});
                    result[1].should.include({ type: 'password', name: 'password', placeholder: 'password' });   
                done();
                }); // end 
        }); // end of IT
        
        it("should display login page on /login GET", function(done){
            chai.request(baseUrl)
                .get('/login')
                .end(function(err, res){
                    if(err) throw err;
                    expect(err).to.be.a('null');
                    expect(res).to.not.be.a('null');
                    res.should.have.status(200);
                    res.text.should.contain('<title>YelpCamp</title>');
                    res.text.should.match(/<h1>Login!<\/h1>/);
                    
                    var result = getParams(res.text);
                    result[0].should.include({type: 'text', name: 'username', placeholder: 'username'});
                    result[1].should.include({ type: 'password', name: 'password', placeholder: 'password' });   
                done();
                }); // end 
        }); // end of IT

        it("should register new user on /register POST", function(done){
            chai.request(baseUrl)
              .post("/register")
              .set('content-type', 'application/json')
              .send({'username': 'Javed', 'password': 'password'})
              .end(function (err, res, body){
                  if(err) {
                    done(err);
                  } else {
                    expect(err).to.be.a('null');
                    expect(res).to.not.be.a('null');
                    res.status.should.equal(200);
                    // console.log(res);
                    done();  
                  }
              });
          });
    });

    
function getParams(val){
  var $ = cheerio.load(val);
  var forms = [];
  $('form > input').each(function(){
      var form = $(this).attr();
        if ((form['type'] == 'text') || (form['type'] == 'password')){
        forms.push({'type': form['type'], 'name': form['name'], 'placeholder': form['placeholder']});
         } 
        }); 
    // console.log(forms);
  return forms;        
}

