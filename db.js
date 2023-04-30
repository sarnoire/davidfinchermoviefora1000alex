const mongoose = require('mongoose');
mongoose.connect('mongodb://user:password@localhost:27017/TheSocialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin',
  ssl: true,
  sslValidate: true,
  sslCA: [ca],
});

