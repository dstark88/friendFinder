var path = require("path");


module.exports = function(app) {
    // console.log(app, "app");
   
    app.get("/", function(req, res) {
        console.log("/ hit");
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
    app.get("/survey", function(req, res) {
        console.log("/survey hit");
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("/submit", function(req, res) {
        console.log("/submit hit");
        res.sendFile(path.join(__dirname, "/../public/submit.html"));
    });
}