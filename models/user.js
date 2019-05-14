var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// set up plugin

UserSchema.plugin(passportLocalMongoose);

// The above plugin has two serializeUser and deserializeUser method that were defined in app.js.
// No need to create own methods

module.exports = mongoose.model("User", UserSchema);