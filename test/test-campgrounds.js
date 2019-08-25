var chai = require("chai"),
    chaiHttp = require("chai-http"),   
    mongoose   = require("mongoose"),
    should = chai.should(),
    expect = chai.expect,
    cheerio = require("cheerio"),
    baseUrl = "http://localhost:8626";
    
    // seedDB = require("../seed");

var middleware = require("../middleware");
var compoundLinks = [];

chai.use(chaiHttp);

describe('YelpCamp', function(){
  it("should display home page on / GET", function(done){
            chai.request(baseUrl)
                .get('/')
                .end(function(err, res){
                    if(err) throw err;
                    expect(err).to.be.a('null');
                    expect(res).to.not.be.a('null');
                    res.should.have.status(200);
                    res.text.should.contain('<title>YelpCamp</title>');
                    res.text.should.match(/<h1>Welcome to YelpCamp!<\/h1>/);   
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

        it("should list all campgrounds on /campgrounds GET", function(done){
                  chai.request(baseUrl)
                      .get('/campgrounds')
                      .end(function(err, res){
                          if(err) throw err;
                          expect(err).to.be.a('null');
                          expect(res).to.not.be.a('null');
                          res.should.have.status(200);
                          compoundLinks = getHrefs(res.text);
                          compoundLinks.should.be.a('array');
                          compoundLinks.length.should.be.gt(1);
                          done();
                      }); // end 
              }); // end of IT

        it("should list a single campground on /campgrounds/<id> GET", function(done){
                chai.request(baseUrl)
                    .get(compoundLinks[1])
                    .end(function(err, res){
                        if(err) throw err;
                        expect(err).to.be.a('null');
                        expect(res).to.not.be.a('null');
                        res.should.have.status(200);
                        var headers = getH4Text(res.text);
                        headers.should.be.a('array');
                        headers[0].should.be.equal('$/night');
                        headers[1].should.be.equal('Salman Greek');
                        
                        done();
                    }); // end 
            }); // end of IT
            
            it("should redirect to create new campground if campground id does not exist on /campgrounds/<id> GET", function(done){
                chai.request(baseUrl)
                    .get('/campgrounds/5d61509bdffbd51a388cdf3')
                    .end(function(err, res){
                        // console.log(res.text);
                        res.should.have.status(200);
                        var $ = cheerio.load(res.text);
                        var header = $('div > h1' ).text();
                        // console.log("header", header);
                        header.should.be.equal('Create a New Campground');
                        done();
                    }); // end 
            }); // end of IT
        });

    describe('YelpCamp - Add new Campground', function(){
        it("should not add a new campground without UserId on / POST", function(done){
            var data = {  name: "Hope Valley Campground",
                image: "https://kinarino.k-img.com/system/press_images/001/372/397/a206c304213f638c5da602e486507e5c546b6217.jpg?1548589031",
            
                description: "Gorgeous campsites with lots of space and trees and fantastic full hook ups. The only reason this isn't 5 stars is the nearby road noise, but it really was t too bad. The camp operator was very nice and accommodating. I definitely recommend staying here.",
                author: {
                    username: "testUser"
                    }    
                };
    
            chai.request(baseUrl)
                .post('/')
                .set('content-type', 'application/json')
                .send(data)
                .end(function(err, res){
                    if(err) throw err;
                    res.should.have.status(404);
                    done();
                        }); // end 
                      }); // end of IT 
                      
        it("should update existing campground on /campgrounds/:id PUT", function(done){
                chai.request(baseUrl)
                    .get(compoundLinks[1])
                    .end(function(err, res){
                        if(err) throw err;
                        res.should.have.status(200);
                        // console.log(res.text);
                        var $ = cheerio.load(res.text);
                        var campId = $('div > .text-right > a[href]').attr("href")
                        var campgroundId = campId.slice(13, 37);;
                        // console.log("CampId:", campId);
                         chai.request(baseUrl)
                         .put(compoundLinks[1])
                         .send({'name': 'Updated Campground'})
                         .end(function(err, res){
                            res.should.have.status(200);
                        done();
                         }); // end of Update      
                        }); // end 
                    }); // end of IT              

  });

// local functions to get Href attribute values
function getHrefs(val){
  var $ = cheerio.load(val);
  var links = [];

  $('div > p > a[href]').each(function(){
      var link = $(this).attr('href');
          links.push(link);
          });
    //   console.log(links);
  return links;        
}

// local functions to get H4 element values 
function getH4Text(val){
  var $ = cheerio.load(val);
  var headers = [];
  var errorMs = "";

  $('.caption-full > h4' ).each(function(){
      var header = $(this).text();
          headers.push(header);
          });
    //   console.log(headers);
  return headers;        
}