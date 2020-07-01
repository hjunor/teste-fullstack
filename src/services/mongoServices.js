const mongoose = require('mongoose');

const URL = `mongodb://dev:3n5df3k9@localhost:27017/dev`;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(URL, option, (erro) => {
  !erro ? console.log('connect') : console.log(erro);
});
