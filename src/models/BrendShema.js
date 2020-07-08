const mongoose = require('mongoose');
const uuid = require('uuid');

const BrendShema = new mongoose.Schema({

  _id: {
    type: String,
    default: uuid.v4()
  },
  name: {
    type: String,
    require: true
  },

})


module.exports = mongoose.model('Brend', BrendShema);