// Funções com Paramêtros

const ler = require('readline-sync');

const DOLAR = 5.16, EURO = 5.55, LIBRA = 6.46, IENE = 0.033;

function formatarReal(real) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(real);
}

function convertDolar(valor) {
    let result = valor / DOLAR;
    function formatarDolar(result) {
        return new Intl.NumberFormat('en-US', { 
            style: 'currency', currency: 'USD' }).format(result);
        }
    console.log("O valor " + formatarReal(valor) + " convertido para Dólar é: " + formatarDolar(result));
}

function convertEuro(valor) {
    let result = valor / EURO;
    return new Intl.NumberFormat('de-DE', { 
        style: 'currency', currency: 'EUR' }).format(result);
}

function convertLibra(valor) {
    return new Intl.NumberFormat('en-GB', { 
        style: 'currency', currency: 'GBP' }).format(valor / LIBRA);
}

let valor = function convertIene(valor) {
    return new Intl.NumberFormat('ja-JP', { 
        style: 'currency', currency: 'JPY' }).format(valor / IENE);
}

let real = ler.questionFloat("Informe o valor em Reais: ");
let opt = ler.questionInt("Para qual moeda deseja converter? \n 1. DOLAR - 2. EURO - 3. LIBRA - 4. IENE: ");

switch (opt) {
    case 1:
        convertDolar(real);
        break;
    case 2:
        console.log(`O valor ${formatarReal(real)} convertido para Euro é ${convertEuro(real)}`);
        break;
    case 3:
        console.log(`O valor ${formatarReal(real)} convertido para Libra é ${convertLibra(real)}`);
        break;
    case 4:
        console.log(`O valor ${formatarReal(real)} convertido para Iene é ${valor(real)}`);
        break;
    default:
        console.log("Opção Inválida!!!")
        break;
}