const Thought = require('../models/thought');

exports.createThought = async (req, res) => {
  const { content, author } = req.body;
  const thought = new Thought({ content, author });
  await thought.save();
  res.json(thought);
};

exports.getAllThoughts = async (req, res) => {
  const thoughts = await Thought.find();
  res.json(thoughts);
};
