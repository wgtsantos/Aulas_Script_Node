const ler = require('readline-sync');
const produtos = require('./46.1_bd_produtos');

const cadProduto = () => {
    let x = produtos.length; // quantidade de produtos
    let id = x + 1;
    let nome = ler.question("Informe o nome do novo produto: ");
    let quantidade = ler.questionInt("Informe a quantidade do produto: ");
    let preco = ler.questionFloat("Informe o preco do produto: ");
    adicionarProduto(id, nome, quantidade, preco);
}

const adicionarProduto = (id, nome, quantidade, preco) => {
    produtos.push({ id, nome, quantidade, preco });
    console.log("Produto Cadastro com Sucesso!!");
    console.log("...");
    ler.question("Pressione Enter para voltar ao Menu");
    console.clear();
};

const listarProdutoPorId = () => {
    check = true;
    while (check) {
        
        let id = ler.questionInt("Informe o ID do produto: ");
        let produto = produtos.find(prod => prod.id === id);
        if (produto) {
            console.log(
                `ID: ${produto.id} ---------------------- 
                Nome: ${produto.nome}
                Quantidade: ${produto.quantidade}
                Preço: ${produto.preco }
                ----------------------------------------`
            );
            let opt = ler.questionInt("Deseja buscar outro Produto? 1. SIM - 2 NÃO:");
            if (opt === 1) {
                console.clear();
            } else {
                check = false;
                console.clear();
            }
        
        } else {
            console.clear();
            console.log("....."); 
            console.log("Produto não encotrado!!");  
        }
    }
};

const atualizarProduto = () => {
    check = true;
    while (check) {
        
        let id = ler.questionInt("Informe o ID do produto: ");
        let produto = produtos.find(prod => prod.id === id);
        if (produto) {
            console.log(
                `ID: ${produto.id} ---------------------- 
                Nome: ${produto.nome}
                Quantidade: ${produto.quantidade}
                Preço: ${produto.preco }
                ----------------------------------------`
            );
            let opt = ler.questionInt("Deseja alterar este Produto? 1. SIM - 2 NÃO:");
            if (opt === 1) {
                console.clear();
                attproduto(id);
                check = false;
            } else {
                console.clear();
            }
        } else {
            console.clear();
            console.log("....."); 
            console.log("Produto não encotrado!!");
        }
    }
};

const attproduto = (id) => {
    let produto = produtos.find(prod => prod.id === id);
    let nomeAtt = ler.question(`Informe o novo nome do produto [${produto.nome}]: `);
    let quantidadeAtt = ler.questionInt(`Informe a nova quantidade [${produto.quantidade}]: `);
    let precoAtt = ler.questionFloat(`Informe o novo preco [${produto.preco}]: `);
    produto.nome = nomeAtt;
    produto.quantidade = quantidadeAtt;
    produto.preco = precoAtt;
    console.log("Produto alterado com Sucesso!!");
    console.log(
        `ID: ${produto.id} ---------------------- 
        Nome: ${produto.nome}
        Quantidade: ${produto.quantidade}
        Preço: ${produto.preco }
        ----------------------------------------`
    );
    console.log("...");
    ler.question("Pressione Enter para voltar ao Menu");
    console.clear();
};

const listarProdutos = () => {
    console.log(" --------------- Produtos Cadastratdos -------------------");
    produtos.forEach(produto => console.log(
        `ID: ${produto.id} ---------------------- 
         Nome: ${produto.nome}
         Quantidade: ${produto.quantidade}
         Preço: ${produto.preco }
         ----------------------------------------`
    ));
    console.log(" ---------------------------------------------------------");
    console.log("...");
    ler.question("Pressione Enter para voltar ao Menu");
    console.clear();
};

const excluirProduto = () => {
    check = true;
    while (check) {
        
        let id = ler.questionInt("Informe o ID do produto: ");
        let produto = produtos.find(prod => prod.id === id);
        let id_ex = produtos.findIndex(p => p.id === id);
        if (produto) {
            console.log(
                `ID: ${produto.id} ---------------------- 
                Nome: ${produto.nome}
                Quantidade: ${produto.quantidade}
                Preço: ${produto.preco }
                ----------------------------------------`
            );
            let opt = ler.questionInt("Tem certeza que deseja excluir este Produto? 1. SIM - 2 NÃO:");
            if (opt === 1) {
                produtos.splice(id_ex, 1);
                console.log("....."); 
                console.log("Produto excluído com sucesso!!!");
                console.log("....."); 
                ler.question("Pressione Enter para voltar ao Menu");
                check = false;
            } else {
                check = false;
                console.clear();
            }
        
        } else {
            console.clear();
            console.log("....."); 
            console.log("Produto não encotrado!!");  
        }
    }
};

module.exports = { cadProduto, listarProdutos, listarProdutoPorId, atualizarProduto, excluirProduto };