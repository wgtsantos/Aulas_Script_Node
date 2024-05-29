// for loop

const ler = require('readline-sync');
let n = ler.questionInt("Digite um numero: ");
let cont = 5;
for (let i = 1; i <= n; i++) { 

    console.log(i);

    if(i >= cont) {
        let sair = ler.question("'Enter' continuar contando ou 'sair' para finalizar:");
        sair = sair.toLowerCase();
        if(sair === 'sair' || i == n) {
            console.log("Contagem finalizada!!")
            break;
        }
        cont += 5;
    }
}