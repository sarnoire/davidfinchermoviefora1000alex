const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// GET all thoughts
router.route('/').get(getAllThoughts);

// GET a single thought by its _id
router.route('/:id').get(getThoughtById);

// POST a new thought
router.route('/').post(createThought);

// PUT to update a thought by its _id
router.route('/:id').put(updateThought);

// DELETE to remove a thought by its _id
router.route('/:id').delete(deleteThought);

// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
