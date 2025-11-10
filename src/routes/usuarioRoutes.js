// src/routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/usuarioController');

// Rota de cadastro
router.post('/register', registrarUsuario);

module.exports = router;
