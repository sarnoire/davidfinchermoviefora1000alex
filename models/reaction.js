const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }]
});

const reactionSchema = new Schema({
  type: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  thought: { type: Schema.Types.ObjectId, ref: 'Thought' }
});

const Thought = mongoose.model('Thought', thoughtSchema);
const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = { Thought, Reaction };
