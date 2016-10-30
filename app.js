const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// routs here
const homePageRoute = require('./routes/index');
const loginPageRoute = require('./routes/login');
const signupPageRoute = require('./routes/signup');

const app = express();
const SECRET = 'tacos3000';
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/', homePageRoute);
app.use('/login', loginPageRoute);
app.use('/signup', signupPageRoute);


// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.listen(port, () => console.log('now listening to port', port));

