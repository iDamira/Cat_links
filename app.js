
const logger = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

// routes here
const indexRoute = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();
const SECRET = 'tacos3000';


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use('/', indexRoute);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('now listening to port', port));

