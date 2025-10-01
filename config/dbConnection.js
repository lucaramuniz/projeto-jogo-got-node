// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

// // Função que retorna o cliente conectado
// // Nota: a conexão é estabelecida uma única vez na inicialização do servidor.
// module.exports = async function () {
//   await client.connect();
//   console.log("Conexão com o MongoDB estabelecida.");
//   return client;
// };
const banco = require("mongodb");
const connBancoDB = function () {
  console.log("Entrou em conexão");
  const db = new banco.Db("got", new banco.Server("localhost", 27017, {}), {});
};
