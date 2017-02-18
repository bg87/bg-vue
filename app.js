var express    = require("express");
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var favicon    = require('serve-favicon');
var cors       = require('cors');
var users      = require('./routes/users');
var notes      = require('./routes/notes');

// Serve favicon
app.use(favicon(__dirname + '/favicon.ico'));

app.use(cors());

// Set headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve dist
app.use('/dist', express.static(path.join(__dirname, '/dist')));

// Routes
app.use('/users', users);
app.use('/notes', notes);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Connect to mongodb
var databaseURI = 'mongodb://localhost:27017/portfolio';
mongoose.connect(databaseURI);

mongoose.Promise = global.Promise;
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
