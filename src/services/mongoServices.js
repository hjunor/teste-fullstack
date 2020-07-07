require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const URL = `mongodb://dev:3n5df3k9@localhost:27017/dev`;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(URL, option, (erro) => {
  !erro ? console.log('connect') : console.log(erro);
});

module.exports = mongoose;
