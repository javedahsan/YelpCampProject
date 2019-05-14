var express = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    flash      = require("connect-flash"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    methodOverride = require("method-override"),
    Comment    = require("./models/comment"),
    User       = require("./models/user"),
    seedDB     = require("./seed");

// requiring Routes
var indexRoutes    = require("./routes/index");
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");

// seedDB(); we not seed the database

// configure local session
app.use(require("express-session")({
    secret:"My first company is united consultant",
    resave: false,
    saveUninitialized: false
}));

// tell app.js to use passport and session
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Database
mongoose.connect("mongodb://javedmoham-webdevbootcamp-6869387/yelp_camp_12", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   // instead of defined flash error in each module, define here
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   res.locals.warning = req.flash("warning");
   res.locals.info = req.flash("info");
    next();
});

// app.use(indexRoutes);
// app.use(campgroundRoutes);
// app.use(commentRoutes);


// define common part of routes here e.g. /campground and remove from routes
app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


// Campground.create(
//     {name: "Salman Greek",
//     image: "https://images.unsplash.com/photo-1525209149972-1d3faa797c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     description: "This is large stone creek; no water and washroom. it is good for biking"    
//     }, 
//     function(err, campground){
//         if (err){
//             console.log("ERROR");
//         } else {
//             console.log("campground created");
//             console.log(campground);
//         }
//     });
// set routes
        

//start up app server
console.log("host: " + process.env.host + " IP: " + process.env.IP + " Port: " + process.env.PORT);
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp App server is up");
});