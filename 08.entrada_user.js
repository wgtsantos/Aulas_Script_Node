// Entrada Usuário

const readline = require('readline-sync');

let nome = readline.question('Digite seu nome: ');
let num1 = readline.questionInt('Digite um numero: ')
let num2 = readline.questionInt('Digite outro numero: ')

let soma = num1 + num2;

console.log("Prezado(a), " + nome + " o resultado da soma é " + soma);