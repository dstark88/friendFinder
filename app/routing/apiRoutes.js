
var newFriends = require("../data/newFriends.js");

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

   app.post("/api/friends", function(req,res) {
    var friend = req.body;
    
    //    console.log(req.body);
       res.send(friend);
   });

    app.post("/api/submit", function(req,res) {

    friends.push(req.body);
   
    //    console.log(req.body);
       

    var friend = req.body;
    var friendsArray =[];

    //     for (var i = 0; i < friendsArray; i++){
    //   var scoresDiff=0;

    //   for (var j = 0; j < friend.length; j++){
    //      scoresDiff += (Math.abs(parseInt(friends[i].scores[j])-parseInt(friend[j])));
    //   }
    //   friend.push(scoresDiff); 
    //  }
     res.send(friends);
   });
};