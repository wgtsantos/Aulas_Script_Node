// Arrow function aplicando descontos em valores
// function result(valor, desconto) {
//     return valor - (valor * (desconto / 100));
// }

const ler = require('readline-sync');

let result = (valor, desconto) => valor - (valor * (desconto / 100));

let v1 = ler.questionFloat("Digite o valor: ");
let desc = ler.questionFloat("Digite o desconto: ");

let re = result(v1, desc).toFixed(2);

console.log(`O valor de R$ ${v1} com desconto de ${desc}% será de R$ ${re}.`);