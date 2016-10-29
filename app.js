const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const getBreedInfo = require('./routes/petfinder');
const homePageRoute = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/', homePageRoute);
// app.use('/', getBreedInfo);


app.listen(port, () => console.log('now listening to port', port));

