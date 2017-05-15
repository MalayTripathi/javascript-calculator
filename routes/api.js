var express = require('express');
var router = express.Router();
var calculator = require('../api/calculator')

router.post('/add', calculator.add);
// router.post('/sub', calculator.sub);
// router.post('/mul', calculator.mul);
// router.post('/div', calculator.div);

module.exports = router;
