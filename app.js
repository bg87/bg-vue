var express    = require("express");
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve dist
app.use('/dist', express.static(path.join(__dirname, '/dist')));

// Routes
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
