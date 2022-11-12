var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var plantsRouter = require('./routes/plants');

var app = express();

// const firebase = require('firebase');
// var firebaseConfig = {
//   apiKey: "AIzaSyDdxXOlKjGwiXtSv2lsUO3Mxw6-McBpTDU",
//   authDomain: "green-love-92554.firebaseapp.com",
//   projectId: "green-love-92554",
//   storageBucket: "green-love-92554.appspot.com",
//   messagingSenderId: "56308351675",
//   appId: "1:56308351675:web:e9c862804984647ad55f9e"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plants', plantsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
