// Entrada IF ternário

const ler = require("readline-sync");

let valor = ler.questionFloat("Digite um valor: ");

var result = valor > 12.99 ? "Valor acima de 12.99" : "Valor menor que 12.99";

console.log(result);