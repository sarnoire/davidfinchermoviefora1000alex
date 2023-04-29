const express = require('express');
const router = express.Router();
const Thought = require('../models/thought');

router.post('/thoughts', async (req, res) => {
  try {
    const thought = new Thought(req.body);
    await thought.save();
    res.status(201).send(thought);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
