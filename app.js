const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const routes = require('./routes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

// Use middleware to parse incoming requests
app.use(express.json());

// Use routes for API endpoints
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
