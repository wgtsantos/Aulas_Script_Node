// Tratamento de Erros e Exceções - TypeError

try {
    let palavra = undefined;
    console.log(palavra.toLowerCase());
    
} catch (e) {
    if (e instanceof TypeError) {
        console.error("Não foi possível converter a palavra em minúsculo!");
    } else {
        console.error(e);
    }
}