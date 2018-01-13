
var express = require('express');
var actions = require('../controllers/mainController');

var router = express.Router();

router.post('/sendEmail', actions.sendEmail);

module.exports = router;