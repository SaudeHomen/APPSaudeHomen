// src/controllers/usuarioController.js
const Usuario = require('../models/Usuario');

// Função para registrar usuário
exports.registrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, cpf, dataNascimento, celular } = req.body;

    // Verifica se o e-mail já está cadastrado
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    // Cria e salva novo usuário
    const novoUsuario = new Usuario({
      nome,
      email,
      senha,
      cpf,
      dataNascimento,
      celular,
    });

    await novoUsuario.save();
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
};
