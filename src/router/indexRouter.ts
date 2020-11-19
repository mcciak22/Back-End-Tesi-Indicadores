import express = require('express');

const usuariosrutas = require('../routes/usuarioRoute')
const usuariosautenticacionrutas = require('../routes/usuarioAutenticacionRoute')

const app = express();

app.use(usuariosrutas);
app.use(usuariosautenticacionrutas);


module.exports = app;