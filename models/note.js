var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var NoteSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    tag: { type: String, required: true }
});

NoteSchema.plugin(uniqueValidator);

var Note = mongoose.model('Note', NoteSchema);

module.exports = Note;