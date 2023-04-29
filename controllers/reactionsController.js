const Reaction = require('../models/reaction');

exports.createReaction = async (req, res) => {
  const { emoji, user } = req.body;
  const reaction = new Reaction({ emoji, user });
  await reaction.save();
  res.json(reaction);
};

exports.getAllReactions = async (req, res) => {
  const reactions = await Reaction.find();
  res.json(reactions);
};
