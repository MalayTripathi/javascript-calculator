var express = require('express');
var router = express.Router();
var add = require('../api/add')

router.get('/add', add.get);

module.exports = router;
