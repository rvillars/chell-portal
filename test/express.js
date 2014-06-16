var express = require('express');
var server = express();

var port = 9090;

server.get("/portal", function (req, res) {
    res.redirect("/index.html");
});

server.use(express.static(__dirname + '/../build'));
server.listen(port);