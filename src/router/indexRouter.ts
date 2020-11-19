import express = require('express');

const usuariosrutas = require('../routes/usuarioRoute')

const app = express();

app.use(usuariosrutas);


module.exports = app;