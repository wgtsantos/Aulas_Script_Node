// Atividade 7 - Matriz com Assentos marcados Disponiveis e Ocupados

let assentos = [
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"],
    ["DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP", "DISP"]
];

const ler = require('readline-sync');
let check = true;

while (check) {
    
    console.log("------------ Sistema de reservas de Assentos --------------");
    console.log("Escolha as Opções abaixo: ---------------------------------");
    console.log("1. Visualizar Assentos ------------------------------------");
    console.log("2. Selecionar Assento -------------------------------------");
    console.log("3. Sair do Sistema ----------------------------------------");
    console.log("-----------------------------------------------------------");
    let opt = ler.questionInt("=> ");

    switch (opt) {
        case 1:
            console.clear();
            console.table(assentos);
            break;
        case 2:
            console.clear();
            let F = ler.questionInt("Informe o numero da fileira: ");
            let A = ler.questionInt("Informe o numero do assento: ");
            for (let i = 0; i < assentos.length; i++) {
                for (let j = 0; j < assentos[i].length; j++) {
                    if (assentos[F][A] === "OCUP") {
                        console.log(`Fila: ${F} - Assento: ${A} já está Ocupado!!`);
                        i = assentos.length;
                        break;
                    } else {
                        console.log(`Fila: ${F} - Assento: ${A} foi Reservado com Sucesso`);
                        assentos[F][A] = "OCUP";
                        i = assentos.length;
                        break;
                    }
                }
            }
            break;
        case 3:
            console.clear();
            console.log("Sistema Finalizado!")
            check = false;
            break;

        default:
            console.clear();
            console.log("Opção Inválida!! Tente novamente!")
            break;
    }
}
