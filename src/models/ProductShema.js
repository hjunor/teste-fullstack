const mongoose = require('mongoose');
const uuid = require('uuid');

const productSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid.v4(),
    },
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    tag: [
      {
        type: String,
        required: true,
      },
    ],

    files: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'File',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Produto', productSchema);
