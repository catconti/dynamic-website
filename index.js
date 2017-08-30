var express = require('express');
var app = express();

app.use(express.static('my-personal-site'));

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', function() {
var host = server.address().address;
var port = server.address().port;

console.log('Your app is running at http://%s:%s', host, port);
});