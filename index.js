var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));

var server = app.listen(process.env.PORT || 3000, function() {
var host = server.address().address;
var port = server.address().port;

console.log('Your app is running at http://%s:%s', host, port);
});
