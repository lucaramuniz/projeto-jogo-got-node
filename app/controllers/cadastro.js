module.exports.cadastro = (application, req, res) => {
  res.render("cadastro", { validacao: {} });
};

module.exports.cadastrar = (application, req, res) => {
  const dadosForm = req.body;
  req.assert("nome", "campo Nome não pode estar vazio").notEmpty();
  req.assert("usuario", "campo Usuário não pode estar vazio").notEmpty();
  req.assert("senha", "campo Senha não pode estar vazio").notEmpty();
  req.assert("casa", "campo Casa não pode estar vazio").notEmpty();
  const erros = req.validationErros();
  if (erros) {
    res.send("cadastro", { validacao: erros });
    return;
  } else {
    res.send("Podemos cadastrar");
  }
};
