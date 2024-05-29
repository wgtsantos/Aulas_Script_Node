// While Loop

const ler = require('readline-sync');

let num = ler.questionInt("Informe um numero: ");

while (num > 0) {
    console.log(num);
    num--;
}