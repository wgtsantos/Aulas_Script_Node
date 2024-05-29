// Entrada If Else

const ler = require('readline-sync');

let nota1 = ler.questionFloat("Digite a primeira nota: ");
let nota2 = ler.questionFloat("Digite a segunda nota: ");
let nota3 = ler.questionFloat("Digite a terceira nota: ");

let media = (nota1 + nota2 + nota3) / 3;
let media_arred = media.toFixed(2);

if (media >= 60) {
    console.log("Aprovado, sua nota final é ", media_arred);

} else if(media >= 30 && media <= 59 ){
    console.log(`Recuperação, sua nota final é ${media_arred}`);

} else {
    console.log("Reprovado, sua nota final é " + media_arred);
}