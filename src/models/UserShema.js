const mongoose = require('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const userShema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuid.v4(),
    },
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/],
    },
    password: {
      type: String,
      required: true,
      select: true,
    },
  },
  {
    timestamps: true,
  }
);

userShema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = mongoose.model('Users', userShema);
