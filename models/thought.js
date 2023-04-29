const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

const thoughtSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
});

const reactionSchema = new Schema({
  type: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  thought: { type: Schema.Types.ObjectId, ref: 'Thought' }
});

const User = mongoose.model('User', userSchema);
const Thought = mongoose.model('Thought', thoughtSchema);
const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = { User, Thought, Reaction };
