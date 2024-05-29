// Tratamento de Erros e Exceções - SyntaxError

const ler = require('readline-sync');

try {

    let cod_digitado = ler.question("Digite um código javascript simples de cálculo de variáveis: ");
    let codigo = eval(cod_digitado);
    console.log(codigo);
    
} catch (e) {
    if (e instanceof SyntaxError) {
        console.error("Não foi possível executar seu código! Erros de Sintaxe!");
    } else {
        console.error(e);
    }
}