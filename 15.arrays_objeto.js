// Arrays e Objetos

/* let numeros = {};
console.log(typeof numeros); */

let objetos = {
    nome: "Fulano",
    idade: 18
};

objetos.tel = "31 99872-4523";

console.log(`Nome: ${objetos.nome} - Idade: ${objetos.idade} - Tel: ${objetos.tel}`);

delete objetos.tel;
objetos.idade = 27;

console.log(`Nome: ${objetos.nome} - Idade: ${objetos.idade} - Tel: ${objetos.tel}`);
