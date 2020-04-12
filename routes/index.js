const express = require('express');
const router = express.Router();
const joi= require('Joi');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/generateOtp', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
