//importei o express para o app.js
const express = require("express");

//executando o servidor express
const server = express();

//configurando para o servidor responder em .json
server.use(express.json());

//acordo coletivo para comunicações http
server.listen(8080, () => console.log("servidor online"));

//endpoints
server.get("/", (req, res) => {
  res.send("olá, mundo! :)");
});

server.get("/nome", function (req, res) {
  let nome = retornaNome();
  res.status(200).send(nome);
});

server.get("/nome/:sobrenome", function (req, res) {
  //console.log(req.params.sobrenome)
  let nome = retornaNome();
  res.status(200).send(nome + " " + req.params.sobrenome);
});

//declarando funções
// () => {}
//function (){}

function retornaNome() {
  return "beatriz";
}
