var mongoose = require("mongoose");

// setup Schema
var commentsSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
     }
});

// initiallize database 

var Comment = mongoose.model("Comment", commentsSchema);
module.exports = Comment;