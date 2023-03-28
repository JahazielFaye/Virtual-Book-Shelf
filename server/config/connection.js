const mongoose = require('mongoose');
const url = "mongodb+srv://ponsi:plfLvxmng53t07KO@virtuallibrary.4wdlckd.mongodb.net/test"

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
