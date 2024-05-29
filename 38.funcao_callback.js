// Funções com CallBacks

let msg = function mensagem() {
    console.log("Fim da chamada!");
}

let retorno = function teste(callback) {
    console.log("Primeira chamada!");
    setTimeout(callback, 2000);
    console.log("Segunda chamada!");
}

console.log(retorno(msg));