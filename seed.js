var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
         {  name: "Salman Greek",
            image: "https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "This is large stone creek; no water and washroom. it is good for biking",
            author: {
                username: "testUser"
            }    
        }, 
        {   name: "Green Tree",
            image: "https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60}",
            description: "Green trees near the mountain. it is beatifule water scene"    
        },
        {   name: "Golden hours",
            image: "https://images.unsplash.com/photo-1517398658731-17b18f07b5dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            description: "Golden hours trees near the mountain. it is beatifule water scene"    
        }
    ];
    
function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Removed campgrounds");
             // Add campgrounds
                data.forEach(function(seed){
                    Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added a campgrounds");
                        // Add comments to campground
                        Comment.create(
                            {
                                text: "This place is a greate, but  wish there are internet",
                                author: "Homer"
                            }, function (err, comment){
                                if (err){
                                    console.log(err);
                                }else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comments");
                                    
                                }
                            });
                        }
                    });
                });
            }
        });
   
    
    // Add Comments
};
module.exports = seedDB;