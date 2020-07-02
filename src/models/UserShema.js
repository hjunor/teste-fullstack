const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const userShema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid(),
    },
    name: {
      trim: true,
      createIndexes: true,
      required: true,
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    senha: {
      type: String,
      required: true,
      select: false,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Users', userShema);