const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const thoughtRoutes = require('./routes/thoughts');
const reactionRoutes = require('./routes/reactions');
const Thought = require('./models/thought');
const Reaction = require('./models/reaction');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

// Use middleware to parse incoming requests
app.use(express.json());

// Use routes for API endpoints
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
