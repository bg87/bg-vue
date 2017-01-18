var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var bcrypt   = require('bcryptjs');
var jwt      = require('jsonwebtoken');
var User     = require('../models/user');
var Note     = require('../models/note');

// Make sure user is authenticated before reaching routes
router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'H34j58w623lK4R6vbY4', function(err, decoded) {
        if(err) {
            return res.status(401).json({
                title: 'Not authenticated',
                error: err
            });
        }
        next();
    });
});


// Get notes
router.get('/', function(req, res) {
    // Decode the token and find the user
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user) {
        if(err) {
            return res.status(500).json({
                title: 'User not found',
                error: err
            });
        }
        // Get notes with user id
        Note.find({'user': user._id}, function(err, notes) {
            if(err) {
                return res.status(500).json({
                    title: 'Note not found',
                    error: err
                });
            }
             res.status(200).json({
                    title: 'Notes found',
                    notes: notes
                });
        });
    });
});


// Save new note
router.post('/save', function(req, res) {
    // Decode the token and find the user
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user) {
            if(err) {
                return res.status(500).json({
                    title: 'User not found',
                    error: err
                });
            }

            var note = new Note({
                content: req.body.content,
                user: user,
                tag: req.body.tag
            });

            note.save(function(err, result) {
                if(err) {
                    return res.status(500).json({
                        title: 'Error saving note',
                        error: err
                    });
                }
                // Push new note onto user notes array and save
                user.notes.push(result);
                user.save();

                res.status(201).json({
                    title: 'Note saved',
                    obj: result
                });
            });
    });
});

// Update note

// Delete note
router.post('/delete', function(req, res) {
    // Decode the token and find the user
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user) {
        if(err) {
                return res.status(500).json({
                    title: 'User not found',
                    error: err
                });
            }

            // Delete note
            Note.findById(req.body.id, function(err, note) {
                if(err) {
                    return res.status(500).json({
                        title: 'Error saving note',
                        error: err
                    });
                }
                if(!note) {
                    return res.status(500).json({
                        title: 'Note not found',
                        error: err
                    });
                }
                // Delete reference to note in user.notes
                user.notes.pull(note);
                user.save();

                note.remove(function(err, result) {
                    if(err) {
                        res.status(500).json({
                            title: 'Error deleting note',
                            error: err
                        });
                    }

                    res.status(200).json({
                        title: 'Note deleted',
                        obj: result
                    });
                });
            });
    });
});

module.exports = router;