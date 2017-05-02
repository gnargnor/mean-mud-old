var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var passport = require('./strategies/userStrategy');
var session = require('express-session');

// Route includes
var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');
var universe = require('./routes/universe');
var create = require('./routes/create');
var location = require('./routes/location');
var sight = require('./routes/sight');
var item = require('./routes/item');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user', // this is the name of the req.variable. 'user' is convention, but not required
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

//DATABASE MODULE
var mongoDB = require('./modules/db.js');

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/item', item);
app.use('/sight', sight);
app.use('/location', location);
app.use('/create', create);
app.use('/universe', universe);
app.use('/register', register);
app.use('/user', user);
app.use('/', index);



// App Set //
app.set('port', (process.env.PORT || 5000));

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
