const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TheSocialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.log('Connection failed', error);
});
