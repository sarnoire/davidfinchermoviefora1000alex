const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
  emoji: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
