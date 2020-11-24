import express from 'express';
// import chalk from 'chalk';
// import debug from 'debug';
import usuariosrutas from '../routes/usuarioRoute';
import usuariosautenticacionrutas from '../routes/usuarioAutenticacionRoute';

const app = express();

app.use(usuariosrutas);
app.use(usuariosautenticacionrutas);

//module.exports = app;
export default app;
