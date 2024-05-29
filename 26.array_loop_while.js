// Capturando e Exibindo valores de um Array com While

const ler = require('readline-sync');

let doces = [];
let check = false;

while (!check) {
    let doce = ler.question("Informe um nome de um doce ou digite 'sair' pra finalizar: ").toLowerCase();
    if (doce === 'sair') {
        check = true;
    } else {
        doces.push(doce);   
    }
}

for (let i = 0; i < doces.length; i++) {
   console.log(`=> ${doces[i]}`); 
}