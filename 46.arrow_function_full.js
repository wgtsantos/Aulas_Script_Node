const ler = require('readline-sync');
let produtos = require('./46.1_bd_produtos');
const { cadProduto, listarProdutos, listarProdutoPorId, atualizarProduto, excluirProduto } = require('./46.2_functions');

let check = true;

while (check) {

    console.log("------------- Sistema de Gerenciamento de Estoque --------------");
    console.log("-- Escolha as Opções Abaixo: -----------------------------------");
    console.log("-- 1. Adicionar Novo Produto. ----------------------------------");
    console.log("-- 2. Atualizar Produto. ---------------------------------------");
    console.log("-- 3. Listar Produtos. -----------------------------------------");
    console.log("-- 4. Listar Produto por ID. -----------------------------------");
    console.log("-- 5. Excluir Produto. -----------------------------------------");
    console.log("-- 6. Sair do Sistema. -----------------------------------------");
    console.log("----------------------------------------------------------------");
    let opt = ler.questionInt("=> ");

    switch (opt) {
        case 1:
            console.clear();
            cadProduto();
            break;
        case 2:
            console.clear();
            atualizarProduto();
            break;
        case 3:
            console.clear();
            listarProdutos();
            break;
        case 4:
            console.clear();
            listarProdutoPorId();
            break;
        case 5:
            console.clear();
            excluirProduto();
            break;
        case 6:
            check = false;
            break;
        default:
            console.clear();
            console.log("Opção informada é inválida! Tente Novamente!");
            break;
    }
}

console.log("Sistema Finalizado!");
