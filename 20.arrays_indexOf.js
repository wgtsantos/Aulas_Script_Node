// Arrays IndexOf

let nomes = ["Marta", "Jonas", "Claudio", "José", "Geralda", "Maria"];

let nome = "Claudio";

let x = nomes.indexOf(nome);

if(x >= 0) {
    console.log(`O ${nome} está na posição ${x} do array nomes.`);
} else {
    console.log(`${nome} não existe no array nomes`);
}
