// Tratamento de Erros e Exceções - URIError

const ler = require('readline-sync');

try {

    let URL = ler.question("Digite um link de um site: ");
    result = decodeURIComponent(URL);
    console.log(result);
    
} catch (e) {
    if (e instanceof URIError) {
        console.error("Erro ao codificar a URL digitada!");
    } else {
        console.error(e);
    }
}