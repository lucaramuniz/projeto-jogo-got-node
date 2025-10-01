/* importar o módulo do framework express */
const express = require("express");

/* importar o módulo do consign */
const consign = require("consign");

/* importar o módulo do body-parser */
const bodyParser = require("body-parser");

/* importar o módulo do express-validator */
const { body, validationResult } = require("express-validator");

/* iniciar o objeto do express */
const app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set("view engine", "ejs");
app.set("views", "./app/views");

/* configurar o middleware express.static */
app.use(express.static("./app/public"));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

// Remova esta linha obsoleta
// app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
  .include("config/dbConnection.js") // Carregue a conexão com o banco primeiro
  .then("app/models") // Depois, carregue os modelos
  .then("app/controllers") // Em seguida, carregue os controladores
  .then("app/routes") // E por último, as rotas que usam os controladores
  .into(app);

/* exportar o objeto app */
module.exports = app;
