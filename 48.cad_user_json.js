// Cadastro Simples usando JSON

const fs = require('fs');
const ler = require('readline-sync');

let arquivo = '48.1.users.json';

if(!fs.existsSync(arquivo)) {
    const dados_ini = [];
    fs.writeFileSync(arquivo, JSON.stringify(dados_ini, null, 2), 'utf-8');
} 
let users = [];
let usersJson = fs.readFileSync(arquivo, 'utf-8');
users = JSON.parse(usersJson);

const cadastrar = () => {
    let nome = ler.question("Digite seu nome: ");
    let email = ler.questionEMail("Digite seu email: ");

    const user_existe = users.some(usuario => usuario.nome === nome);
    if (user_existe) {
        console.log("Usuário já cadastrado no JSON");
    } else {
        users.push({nome: nome, email: email});
        fs.writeFileSync(arquivo, JSON.stringify(users, null, 2), 'utf-8');
        console.log("Usuário Cadastrado no JSON com Sucessso!");
    }
};

const exibir = () => {
    users.forEach(user => {
        console.log(`----------------------
                     Nome: ${user.nome}
                     E-mail: ${user.email}
                     ----------------------`
                    );
    });
}

let opt = ler.questionInt("1. Cadastrar ou 2. Visualizar: ");

switch (opt) {
    case 1:
        cadastrar();
        break;
    case 2:
        exibir();
        break;
    default:
        console.log("Opção Inválida!!!");
        break;
}