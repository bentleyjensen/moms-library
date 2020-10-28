var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('librarySearch', { title: 'Mom\'s Library' });
});

module.exports = router;
