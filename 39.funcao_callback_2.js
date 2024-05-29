// Buscando Nomes utilizando função com callback

const ler = require('readline-sync');

const nomes = [ "Ana", "Carlos", "Eduarda", "Fernando", "Gabriela",  "Hugo",
                 "Isabela", "Joao", "Larissa", "Miguel", "Natalia", "Otavio",
                 "Paula", "Rafael", "Sofia"
             ];
  
function buscarNome(nome, callback) {
    if (nomes.indexOf(nome) !== -1)  {
        callback(null, true);
    } else {
        callback(null, false)
    }
}

let busca = ler.question("Digite o nome que deseja buscar: ");

buscarNome(busca, function(erro, encontrado) {
    if (erro) {
        console.log("Erro ao buscar o nome!");
    } else {
        if (encontrado) {
            console.log(`O nome ${nomes[nomes.indexOf(busca)]} existe no array nomes!`);
        } else {
            console.log(`O nome ${busca} não existe no array nomes!`);
        }
    }
});

  