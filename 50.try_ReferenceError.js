// Tratamento de Erros e Exceções - ReferenceError

let frutas = ["Laranja", "Goiaba"];

try {

    console.log(fruta);
    
} catch (e) {
    if (e instanceof ReferenceError) {
        console.error("Não foi possível ler os itens do array!");
    } else {
        console.error(e);
    }
}