require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/saude-homem';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Mongo conectado'))
  .catch(err => console.error('Erro Mongo:', err));

app.get('/', (req, res) => res.send('API Saude Homem ok'));

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`));