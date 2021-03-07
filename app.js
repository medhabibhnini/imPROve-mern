var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose =require('mongoose');//help to connect to our database

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter=require('./routes/Student');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth',studentRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
//connection base donnée
const uri="mongodb+srv://imen:imenmanai12@cluster0.ntiqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; //database url
 mongoose.connect(uri,{useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true});
 //
 const connection= mongoose.connection;
 connection.once('open',()=>{

    console.log("MongoDB database connection established successfully");
 });

module.exports = app;

