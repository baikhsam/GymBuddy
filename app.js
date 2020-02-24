/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var methodOverride = require('method-override');
var session = require('express-session');
var errorHandler = require('errorhandler');

// Require routes here
var login = require('./routes/login');
var index = require('./routes/index');
var friends = require('./routes/friends');
//var addfriend = require('./routes/addfriend');
var profile = require('./routes/profile');
var account = require('./routes/account');
var settings = require('./routes/settings');
var mentormatch = require('./routes/mentormatch');
var signup = require('./routes/signup');
var edit = require('./routes/edit');

var app = express();

// All environments
app.set('port', process.env.PORT || 3000);

// View engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));


if ('development' == app.get('env')) {
    app.use(errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/signup', signup.view);
app.post('/register', signup.register);
app.get('/main', index.view);
app.get('/friends', friends.view);
app.get('/profile', profile.view);
app.get('/edit', edit.view);
app.get('/settings', settings.view);
app.get('/mentormatch', mentormatch.view);
app.get('/addfriend', account.addfriend);
app.get('/:userName', account.view);   


app.use(express.static(path.join(__dirname, 'public')));
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
})