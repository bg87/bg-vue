var express = require('express');
var router  = express.Router();
var path    = require('path');
var bcrypt  = require('bcryptjs');
var User    = require('../models/user');

router.post('/signup', function(req, res, next) {
    var user = new User({
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title: 'Error saving new user',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

module.exports = router;