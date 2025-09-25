module.exports = function (application) {
  application.get("/cadastro", function (req, res) {
    application.app.controllers.cadastro.cadastro(application, req, res);
  });

  application.post("/cadastrar", function (req, res) {
    //application.app.controllers.cadastro.cadastrar(application, req, res);
    const dadosForm = req.body;
    req.assert("nome", "Nome não pode estar vazio").notEmpty();
    req.assert("usuário", "Usuário não pode estar vazio").notEmpty();
    req.assert("senha", "Senha não pode estar vazio").notEmpty();
    req.assert("casa", "Casa não pode estar vazio").notEmpty();
    let erros = req.validationErrors();
    if (erros) {
      res.send("Erro no formulário");
      return;
    }
    res.send("Sem erros no formulário");
  });
};
