// Tratamento de Erros e Exceções - RangeError

const ler = require('readline-sync');
const VALOR_FIXO = 100;

try {

    let num1 = ler.questionFloat("Digite um valor: ");
    let num2 = ler.questionFloat("Digite outro valor: ");
    let soma = num1 + num2;
    result = soma.toFixed(VALOR_FIXO);
    console.log(result);
    
} catch (e) {
    if (e instanceof RangeError) {
        console.error("O valor somado está fora do intervalo permitido!");
    } else {
        console.error(e);
    }
}