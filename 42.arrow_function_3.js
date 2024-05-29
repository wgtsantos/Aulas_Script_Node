// arrow function com IF e ELSE

const ler = require('readline-sync');

let verificaValor = (idade, tipo, valorIngresso) => {
    if (idade >= 18 && tipo === "normal") {
        return valorIngresso - (valorIngresso * 0.25);
    } else if (idade >= 18 && tipo === "estudante") {
        return valorIngresso - (valorIngresso * 0.50);
    } else if (idade >= 18 && tipo === "vip") {
        return valorIngresso - (valorIngresso * 0.75);
    } else {
        return "Entrada não permitida!! ou Tipo de Ingresso Inválido!!";
    }
}

let idade = ler.questionInt("Informe sua Idade: ");
let tipo = ler.question("Informe o tipo de Ingresso: ").toLowerCase();
let valorIngresso = ler.questionFloat("Informe o valor do Ingresso: ");

console.log(verificaValor(idade, tipo, valorIngresso));