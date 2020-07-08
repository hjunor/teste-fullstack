const mongoose = require('mongoose');
const uuid = require('uuid');

const BrendShema = new mongoose.Schema({

  _id: {
    type: String,
    default: true
  },
  name: {
    type: String,
    require: true

  }

})