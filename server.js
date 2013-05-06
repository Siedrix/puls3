var express = require('express'),
	swig    = require('swig'),
	cons    = require('consolidate');

var app = express();

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
	res.render('index');
});

app.listen(3000);