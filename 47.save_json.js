// Salvar dados em um arquivo JSON

const fs = require('fs');

let usuarios = [ 
    { nome: "Marta Silva", idade: 23, email: "marta@gmail.com"  },
    { nome: "Marcos Sena", idade: 18, email: "marcos@gmail.com" },
    { nome: "João Marcos", idade: 25, email: "Jaum@gmail.com" },
    { nome: "Silvana Lopes", idade: 16, email: "silvana@gmail.com" }
];

usuarios.push({nome: "Fulano", idade: 25, email: "fulano@gmail.com"});

const dadosJSON = JSON.stringify(usuarios, null, 2);

// Salvar os Dados no JSON
fs.writeFileSync('47.1.usuarios.json', dadosJSON, 'utf-8', (erro) =>{
    if(erro) {
        console.log("Erro ao gravar dados no JSON", erro);
    } else {
        console.log("Dados salvos com sucesso em '47.1.usuarios.json'.");
    }
});


// Exibir os Dados no JSON
const exibirDados = fs.readFileSync('47.1.usuarios.json', 'utf-8');
let  users = JSON.parse(exibirDados);
console.log(users);