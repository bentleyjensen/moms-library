var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set Router files
var indexRouter = require('./routes/index');
var libraryRouter = require('./routes/library');
var adminRouter = require('./routes/admin');
var loginRouter = require('./routes/login');
var checkinRouter = require('./routes/checkin');
var checkoutRouter = require('./routes/checkout');
var searchRouter = require('./routes/search');
var studentAccountRouter = require('./routes/studentAccount');
var reportsRouter = require('./routes/reports');
var addBooksRouter = require('./routes/addBooks');
var adminSearchRouter = require('./routes/adminSearch');
var adminStudentsRouter = require('./routes/adminStudents');


// Create Routes
app.use('/', indexRouter);
app.use('/library', libraryRouter);
app.use('/admin', adminRouter);
app.use('/admin/login', loginRouter);
app.use('/checkin', checkinRouter);
app.use('/checkout', checkoutRouter);
app.use('/search', searchRouter);
app.use('/studentAccount', studentAccountRouter);
app.use('/admin/reports', reportsRouter);
app.use('/admin/addBooks', addBooksRouter);
app.use('admin/Search', adminSearchRouter);
app.use('/admin/Students', adminStudentsRouter);

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
