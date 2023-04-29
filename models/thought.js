const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
