const mongoose = require('mongoose');

const CategoryShema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: true,
    },
    title: {
      required: true,
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', CategoryShema);
