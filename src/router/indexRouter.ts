import { Request , Response } from 'express';
import express = require('express');
const chalk = require('chalk')
import debug = require('debug');
const usuariosrutas = require('../routes/usuarioRoute')
const usuariosautenticacionrutas = require('../routes/usuarioAutenticacionRoute')

const app = express();

app.use(usuariosrutas);
app.use(usuariosautenticacionrutas);


module.exports = app;