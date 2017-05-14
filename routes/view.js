var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.hbs', { subHead : 'Designed By Malay Tripathi', pageTitle: 'Simple Calculator App' });
});

module.exports = router;
