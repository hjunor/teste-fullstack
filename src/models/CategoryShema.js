const mongoose = require('mongoose');
const uuid = require('uuid');

const CategoryShema = new schema(
  {
    _id: {
      type: String,
      default: uuid.v5(),
    },
    titulo: {
      trim: true,
      createIndexes: true,
      required: true,
      type: String,
    },
    descricao: {
      type: String,
      required: true,
    },
    dataCriacao: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

CategoryShema.pre('save', (next) => {
  let agora = new Date();
  if (!this.dataCriacao) {
    this.dataCriacao = agora;
    next();
  }
});

module.exports = mongoose.model('Category', CategoryShema);
