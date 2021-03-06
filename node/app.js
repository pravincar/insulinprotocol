var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();
// app.use(logger('dev'));
app.use(cookieParser());

if (app.get('env') === 'development') {
  var browserSync = require('browser-sync');
  var bs = browserSync.create().init({ui:false,files:['./**/*.js','./**/*.css','./**/*.html'],logSnippet:false,watchOptions:{ignoreInitial:true,cwd:'/var/www/insulin/src'}});
  app.use(require('connect-browser-sync')(bs));
}
app.use('/node_modules',express.static(path.join(__dirname,'../node_modules/')));
app.use(express.static(path.join(__dirname, '../src/'),{index:app.get('env')==='development'?'index-jit.html':'index.html'}));

app.use('/data', require('./routes/data'));


// catch 404 and forward to error handler
app.get(/(\.)+/,function(req, res, next) {
  var err = new Error('catch 404 URL:',req.url);
  err.status = 404;
  next(err);
});

app.get('*',function(req, res){
    res.sendFile(path.join(__dirname,app.get('env') === 'development'?'../src/index-jit.html':'../src/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('express_error',err);
  // render the error page
  res.status(err.status || 500);
  res.send(err.status+': Not Found');
});

module.exports = app;
