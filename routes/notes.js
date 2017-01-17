var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');
var jwt      = require('jsonwebtoken');
var User     = require('../models/user');

// Save new note
router.post('/save', function(req, res) {
    console.log(req.body);
});

module.exports = router;