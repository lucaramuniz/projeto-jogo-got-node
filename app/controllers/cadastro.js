const { validationResult, body } = require("express-validator");
module.exports.cadastro = (application, req, res) => {
  res.render("cadastro", { validacao: {}, dadosForm: {} });
};

module.exports.cadastrar = async (application, req, res) => {
  const dadosForm = req.body;

  // Validação manual
  await body("nome", "campo Nome não pode estar vazio").notEmpty().run(req);
  await body("usuario", "campo Usuário não pode estar vazio")
    .notEmpty()
    .run(req);
  await body("senha", "campo Senha não pode estar vazio").notEmpty().run(req);
  await body("casa", "campo Casa não pode estar vazio").notEmpty().run(req);

  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    res.render("cadastro", { validacao: erros.array(), dadosForm: dadosForm });
    return;
  }
  const connection = await application.config.dbConnection;
  const UsuariosDAO = new application.app.models.UsuariosDAO(connection);
  UsuariosDAO.inserirUsuario(dadosForm);
  res.send("Podemos cadastrar");
};
