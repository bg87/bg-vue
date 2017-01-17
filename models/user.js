var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

// Defines our mongodb document layout
var UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
});

UserSchema.plugin(uniqueValidator);

var User = mongoose.model('User', UserSchema);

module.exports = User;