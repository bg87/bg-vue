var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var TagSchema = new Schema({
    name: { ype: String, required: true, unique: true },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note', required: true }],
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

TagSchema.plugin(uniqueValidator);

var Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;