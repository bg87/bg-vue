var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');
var jwt      = require('jsonwebtoken');
var User     = require('../models/user');
var Note     = require('../models/note');

// Sign in
router.post('/signin', function(req, res) {
    // Find user by email
    User.findOne({email: req.body.email}, function(err, user) {
        if(err) {
            return res.status(500).json({
                title: 'Error signing in user',
                error: err
            });
        }
        if(!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: err
            });
        }
        // Check password
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: err
            });
        }
        // If user exists and has the correct credentials, create jwt
        var token = jwt.sign({user: user}, 'H34j58w623lK4R6vbY4', {expiresIn: 7200});
        // find notes
        Note.find({'user': user._id}, function(err, notes) {
            if(err) {
                return res.status(500).json({
                    title: 'Notes not found',
                    error: err
                });
            }
            res.status(200).json({
                message: 'User logged in',
                token: token,
                userId: user._id,
                notes: notes
            });
        });
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