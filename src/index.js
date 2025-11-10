require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db.js');
const usuarioRoutes = require('./routes/usuarioRoutes.js');
console.log('✅ Rotas de usuário carregadas');
// Conecta ao banco
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // <- ESSENCIAL para ler JSON no body!

// Porta
const PORT = process.env.PORT || 3000;

// Rota de teste
app.get('/', (req, res) => {
  res.send('API Saúde do Homem OK!');
});

// Rotas principais
app.use('/', usuarioRoutes);

// Inicia servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
