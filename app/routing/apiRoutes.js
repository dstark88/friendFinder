var friends = require("../data/friends");
var matchIndex;
var user;
// var userPhoto;
var photo;

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        console.log("/api/friends hit");
        res.json(friends);
    });

    app.get("/api/survey", function(req,res) {
	    res.json(survey);
    });

    app.get("/api/friendMatch", function(req,res) {
       var userInfo = {
           userName: user,
           userPhoto: photo,
           match: friends[matchIndex],
        //    photo: userPhoto,
       }
        res.json(userInfo);
        console.log(friends[matchIndex], "friends match index");
        console.log(user,"user")
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
        var closeScore = 40;
        
        user = req.body.name;


        for (var i = 0; i < friends.length; i++){
            var scoreDiff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
              scoreDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(friend.scores[j]));
            }
            console.log(scoreDiff, "scoreDiff");

            if (scoreDiff < closeScore) {
                closeScore = scoreDiff;
                matchIndex = i;
            } 

            if (scoreDiff == 0) {
                break;
            }
        }
        // console.log(friends[matchIndex], "getting the match index value");
        friends.push(req.body);
        // console.log(friends, "friends in api routes");
        res.send(friends);
   });
};

// var adding = 0;
// for (var i = 0; i < 10; i++) {
//     adding += i; /// MEANS:  adding = adding + i;
//     console.log(adding);

// }

// i = 0:  adding = 0 + 0 = 0
// i = 1:  adding = 0 + 1 = 1
// i = 2:  adding = 1 + 2 = 3
// i = 3:  adding = 3 + 3 = 6
// i = 4:  adding = 6 + 4 = 10