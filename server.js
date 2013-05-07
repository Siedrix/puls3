var express = require('express'),
	swig    = require('swig'),
	cons    = require('consolidate'),
	fs      = require('fs');

var app = express(),
	baseData = fs.readFileSync('./base-data.json').toString();

var data = JSON.parse(baseData);

swig.init({
	cache : false
});

// View engine
app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.set('views', './app/views');

// Static files
app.use( express.static('./public') );

// Routes
app.get('/', function (req, res) {
	res.render('index', {
		posts : data
	});
});

app.listen(3000);