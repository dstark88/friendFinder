
var newFriends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        console.log("/api/friends hit");
        res.json(newFriends);
    });
}
