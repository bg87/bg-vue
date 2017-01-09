var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    // notes: [{type: Schema.Types.ObjectId, ref: 'Note'}],
    // notebooks: [{type: Schema.Types.ObjectId, ref: 'NoteBook'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);