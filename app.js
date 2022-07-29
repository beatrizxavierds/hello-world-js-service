//importei o express para o app.js
const express = require("express");
const calculadora = require("./services/CalculatorService"); //importei o arquivo calculatorservice para usar as funções existentes nele aqui no app.

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

function retornaNome() {
  return "beatriz";
}

server.get("/soma/:numero1/:numero2", function (req, res) {
  let numero1 = req.params.numero1;
  let numero2 = req.params.numero2;
  let resultado = calculadora.somar(parseInt(numero1), parseInt(numero2));
  res.status(200).send("o resultado da soma é:" + resultado);
});

//declarando funções
// () => {}
//function (){}
