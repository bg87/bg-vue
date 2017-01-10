var express    = require("express");
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var user       = require('./routes/user');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve dist
app.use('/dist', express.static(path.join(__dirname, '/dist')));

// Routes
app.use('/user', user);
// app.use('/notes, Note');
// app.use('/notebooks, NoteBook');
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Mongoose
var databaseURI = 'mongodb://localhost:27017/mu';
mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
  res.sendStatus(500);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
