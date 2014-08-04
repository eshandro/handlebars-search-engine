var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var data = require('./models/data.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);

app.get('/search', function(req, res) {
	var searchTerm = req.query.searchTerm;
	res.send(data.programming[searchTerm].desc)
})

var server = app.listen(4614, function() {
	console.log('Express server listening on port ' + server.address().port);
});
