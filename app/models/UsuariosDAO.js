function UsuariosDAO(connection) {
  this._connection = connection();
}
UsuariosDAO.prototype.inserirUsuario = function (usuario) {
  this._connection.open(function (err, mongoClient) {
    mongoClient.collection("usuarios", function (err, collection) {});
  });
};
module.exports = function () {
  return UsuariosDAO;
};
