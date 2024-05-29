// Ordenar Array em um Objeto [{}] ordem alfabetica

let usuarios = [ 
    { nome: "Zildelino Pereira", idade: 45, email: "zild@gmail.com"  },
    { nome: "Solange Pinho", idade: 38, email: "solange@hotmail.com" },
    { nome: "Breno Alves", idade: 25, email: "breno@gmail.com" },
    { nome: "Ana Maria", idade: 19, email: "aninha@outlook.com"  },
    { nome: "Marcos Sena", idade: 18, email: "marcos@gmail.com" },
    { nome: "João Marcos", idade: 25, email: "Jaum@gmail.com" },
    { nome: "Silvana Lopes", idade: 16, email: "silvana@gmail.com" }
];

let ordem_alfa = usuarios.sort((x, y) => x.nome.localeCompare(y.nome));
console.log(ordem_alfa);

// Odernando Objetos pelo nome em ordem Crescente e Decrescente
let idade_cresc = usuarios.sort((x, y) => x.idade - y.idade);
console.log(idade_cresc);

let idade_desc = usuarios.sort((x, y) => y.idade - x.idade);
console.log(idade_desc);