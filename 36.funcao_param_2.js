// Funções com dois ou mais parâmetros

const ler = require('readline-sync');

function criarEvento(nome, local, data, hora, participantes, custoPorPart) {
    let custototal = calculoCustoTotal(participantes, custoPorPart);
    return {
        Nome: nome,
        Local: local,
        Data: data,
        Hora: hora,
        Participantes: participantes,
        'Custo Por Participante': custoPorPart,
        'Custo Total' : custototal
    };
}

function calculoCustoTotal(part, custoPrP) {
    let result = part * custoPrP;
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'
    }).format(result);
}

function exibirEvento(evento) {
    console.log("--------------- Detathes do Evento: -------------------");
    for (const [chave, valor] of Object.entries(evento)) {
        console.log(`${chave} : ${valor}`)
    }
    console.log("-------------------------------------------------------");
}

let no = ler.question("Informe o nome do Evento: ");
let lo = ler.question("Informe o local do Evento: ");
let dat = ler.question("Informe a data do Evento: ");
let ho = ler.question("Informe o horário do Evento: ");
let pa = ler.questionInt("Informe o números de participantes: ");
let cPrP = ler.questionFloat("Informe o valor do ingresso do Evento:");

let EVT = criarEvento(no, lo, dat, ho, pa, cPrP);
console.clear();
exibirEvento(EVT);