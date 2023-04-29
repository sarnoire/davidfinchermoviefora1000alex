const express = require('express');
const router = express.Router();
const Thought = require('../models/thought');
const Reaction = require('../models/reaction');

router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      throw new Error('Thought not found');
    }
    const reaction = new Reaction(req.body);
    thought.reactions.push(reaction);
    await thought.save();
    res.status(201).send(reaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;

