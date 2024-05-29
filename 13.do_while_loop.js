// do while Loop

const ler = require('readline-sync');
let soma = 0, num = 0;

do {
    soma += num;
    num = ler.questionInt("informe um numero ou -1 pra sair: ");

} while (num > 0);

console.log("A soma total dos numeros digitados é: ", soma);