// Entrada Switch Case

const ler = require('readline-sync');

let gate = ler.question("Escolha um portão: A, B, C, ou D: ");
gate = gate.toUpperCase();

switch (gate) {
    case "A":
        console.log("Portão A aberto!")
        break;
    case "B":
        console.log("Portão B aberto!")
        break;
    case "C":
        console.log("Portão C aberto!")
        break;
    case "D":
        console.log("Portão D aberto!")
        break;
    default:
        console.log(`O Portão ${gate} não existe`);
        break;
}