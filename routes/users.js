var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');
var User     = require('../models/user');

// Sign in
route.post('/signin', function(req, res) {
    User.findOne({
        
    });
});

// Sign up
router.post('/signup', function(req, res) {
    console.log(req.body);
    var user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    user.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title: 'Error saving new user',
                error: err
            });
        }
        res.status(201).json({
            title: 'User saved',
            obj: result
        });
    });
});

module.exports = router;