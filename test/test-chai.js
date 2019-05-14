const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);


var baseUrl = "http://webdevbootcamp-javedmoham.c9users.io:8080";
// Test suite

describe("Welcome YelCamp", function(){
    describe("GET /", function(){
        it("return status code 200", function(done){
            chai.request(baseUrl)
                .get('/')
                .end(function(err, res){
                    // there should be no error
                    //should.not.exit(err)
                    if(err) throw err;
                    //res.should.be.json
                    // there should be a 200 status code
                    // console.log(res);
                    expect(err).to.be.a('null');
                    expect(res).to.not.be.a('null');
                    res.status.should.equal(200);
                    // done callback
                      //res.headers["content-type"].should.contain("text/xml");

      res.text.should.contain('<title>YelpCamp</title>');
    //   res.should.contain('xmlns:atom="http://www.w3.org/2005/Atom"');
    //   res.should.contain('xmlns:oup="http://podcast.open.ac.uk/2012"');
    //   res.should.contain("<rss xmlns:");
    //   res.should.contain("<channel>");

      res.text.should.match(/<h1>Welcome to YelpCamp!<\/h1>/);      //channel
    //   doc.should.match(/<oup:aspect_ratio>0.\d/); //item
    //   doc.should.match(/<oup:published_flag>[01]/);
    //   doc.should.match(/<atom:link [^>]+oup:transcript/);
    //   doc.should.contain("application/ttml+xml");
    //   doc.should.contain("http://purl.org/steeple/course");
                  
                    done();
                }); // end 
        }); // end of IT
        
        it("Return Error code for invalid url", function(done){
                  chai.request(baseUrl)
                      .get('/MM')
                      .end(function (err, res){
                      res.status.should.equal(404);
                    done();
                    });
                });
                    
//     }); // TestCase
// });    
// }); // Test suites
    // // Test Case
    // describe("GET /", function(){
    //     it("return status code 200", function(done){
    //         chai.request(baseUrl)
    //          .get(baseUrl)
    //          .end((err, res), function(){
    //               // there should be no errors
    //               should.not.exist(err);
    //               // there should be a 200 status code
    //               res.status.should.equal(200);
    //               // the response should be JSON
    //               res.type.should.equal('application/json');
    //               // the JSON response body should have a
    //               // key-value pair of {"status": "success"}
    //               res.body.status.should.eql('success');
    //               // the JSON response body should have a
    //               // key-value pair of {"data": [2 user objects]}
    //               //res.body.data.length.should.eql(2);
    //               // the first object in the data array should
    //               // have the right keys
    //             //   res.body.data[0].should.include.keys(
    //             //     'id', 'username', 'email', 'created_at'
    //             //   );
    //             })
    //             done();
    //         })
    //     })
    // })
        
//   describe('GET /api/v1/users', () => {
//   it('should respond with all users', (done) => {
//     chai.request(baseUrl)
//     .get('/api/v1/users')
//     .end((err, res) => {
//       // there should be no errors
//       should.not.exist(err);
//       // there should be a 200 status code
//       res.status.should.equal(200);
//       // the response should be JSON
//       res.type.should.equal('application/json');
//       // the JSON response body should have a
//       // key-value pair of {"status": "success"}
//       res.body.status.should.eql('success');
//       // the JSON response body should have a
//       // key-value pair of {"data": [2 user objects]}
//       res.body.data.length.should.eql(2);
//       // the first object in the data array should
//       // have the right keys
//       res.body.data[0].should.include.keys(
//         'id', 'username', 'email', 'created_at'
//       );
//       done();
//     });
  });
});

describe("Register a User", function(){
  describe("Add new User", function(){
    it("Return error code 200", function(done){
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
              console.log(res);
              done();  
            }
        });
    });
  });
});
//   router.post("/register", function(req, res){
//     var newUser = new User({username: req.body.username});
//     User.register(newUser, req.body.password, function(err, user){
//         if(err){
//             console.log(err)
//             req.flash("error", err.message);
//             return res.render("register");
//         }
//         passport.authenticate("local")(req, res, function(){
//           req.flash("success", "Welcome to YelpCamp " + user.username);
//           res.redirect("/campgrounds"); 
//         });
//     });
// });     