var express = require('express');
var router = express.Router();
var calculator = require('../api/calculator')

router.post('/add', calculator.add);

module.exports = router;
