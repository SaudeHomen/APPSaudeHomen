const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  senha: {
    type: String,
    required: true,
    minlength: 4,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  dataNascimento: {
    type: Date,
    required: true,
  },
  celular: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Usuario", usuarioSchema);
