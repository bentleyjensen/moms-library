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
var homeRouter = require('./routes/home');
var homeCheckinRouter = require('./routes/homeCheckin');
var homeCheckoutRouter = require('./routes/homeCheckout');

var libraryRouter = require('./routes/library');
var librarySearchRouter = require('./routes/librarySearch');
var libraryAccountRouter = require('./routes/libraryAccount');

var adminRouter = require('./routes/admin');
var adminLoginRouter = require('./routes/adminLogin');
var adminReportsRouter = require('./routes/adminReports');
var adminAddBooksRouter = require('./routes/adminAddBooks');
var adminSearchRouter = require('./routes/adminSearch');
var adminStudentsRouter = require('./routes/adminStudents');



// Create Routes
app.use('/', homeRouter);
app.use('/checkin', homeCheckinRouter);
app.use('/checkout', homeCheckoutRouter);

app.use('/library', libraryRouter);
app.use('/search', librarySearchRouter);
app.use('/studentAccount', libraryAccountRouter);

app.use('/admin', adminRouter);
app.use('/admin/login', adminLoginRouter);
app.use('/admin/reports', adminReportsRouter);
app.use('/admin/addBooks', adminAddBooksRouter);
app.use('/admin/search', adminSearchRouter);
app.use('/admin/students', adminStudentsRouter);

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
