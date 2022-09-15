// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para deletar");
  const idSelecionado = readline.question();
  console.log("Você selecionou o id: " + idSelecionado);
  const novoArray = database.findIndex(index => index.id == idSelecionado)
  console.log("Voce realmente deseja cancelar? SIM ou NAO?") 
  const pergunta = readline.question().toLowerCase();
  console.log(pergunta)
  if(pergunta == "sim"){
    database.splice(novoArray , 1);
    console.table(database)
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  } else {
  console.log("Ufaa que bom!");
  console.log("Dê enter para voltar");
  readline.question();
  console.clear();
  }
  
}

module.exports = {
  deletarProduto
}
