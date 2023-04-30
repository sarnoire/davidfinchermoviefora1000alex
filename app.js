const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const thoughtRoutes = require('./routes/thoughts');
const reactionRoutes = require('./routes/reactions');
const Thought = require('./models/thought');
const Reaction = require('./models/reaction');
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API for my application',
    },
  },
  // Path to the API docs
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
