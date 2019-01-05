
var newFriends = require("../data/newFriends.js");
var matchIndex;
var user;
// var userPhoto;

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        console.log("/api/friends hit");
        res.json(newFriends);
    });
}
var friends = require("../data/friends");

module.exports = function(app) {
	
   app.get("/api/survey", function(req,res) {
	res.json(survey);
   });

    app.get("/api/friends", function(req,res) {
   res.json(friends);
   });

   app.get("/api/friendMatch", function(req,res) {
       var userInfo = {
           userName: user,
           match: friends[matchIndex],
        //    photo: userPhoto,
       }
       res.json(userInfo);
       console.log("/friends[matchIndex] hit")
   })

   app.post("/api/friends", function(req,res) {
    var friend = req.body;
       res.send(friend);
   });

    app.post("/api/submit", function(req,res) {
        if (!req.body) {
            return;
        }

    var friend = req.body;

    var closeScoreIndex = 0; 
    user = req.body.name;

    for (var i = 0; i < friends.length; i++){ 
        var scoreDiff = Math.abs(parseInt(friends[i].scores) - parseInt(friend.scores));

        if (scoreDiff < friends[closeScoreIndex].scores) {
            closeScoreIndex = i;
            matchIndex = i;
        } 
        if (scoreDiff == 0) {
            break;
        }
    }
    console.log(friends[closeScoreIndex], "getting the close score index");
    friends.push(req.body);
    res.send(friends);
   });
};