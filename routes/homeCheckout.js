var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('homeCheckout', { title: 'Mom\'s Library' });
});

module.exports = router;