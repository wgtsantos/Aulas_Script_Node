// Arrow function com Array de Objetos

let usuarios = [
    { nome: "Ana", idade: 22},
    { nome: "Carlos", idade: 30 },
    { nome: "Eduarda", idade: 15 },
    { nome: "Fernando", idade: 28 },
    { nome: "Gabriela", idade: 14 },
    { nome: "Hugo", idade: 26 },
    { nome: "Isabela", idade: 13 },
    { nome: "João", idade: 17 },
    { nome: "Larissa", idade: 27 },
    { nome: "Miguel", idade: 11 },
    { nome: "Natália", idade: 23 }
];

let verificaIdade = usuario => {
    console.log(`O ${usuario.nome} tem ${usuario.idade} anos e é ${usuario.idade >= 18 ? "Maior" : "Menor"} de idade.`);
};

usuarios.forEach(verificaIdade);