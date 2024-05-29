// Exibindo as infomações de um Objeto {} foreach/of/in

let produtos = [
    { nome: "Teclado USB", preco: 80.99, quantidade: 3 },
    { nome: "Mouse sem fio", preco: 49.99, quantidade: 2 },
    { nome: "Monitor LED 24 polegadas", preco: 699.90, quantidade: 2 },
    { nome: "HD Externo 1TB", preco: 299.99, quantidade: 4 },
    { nome: "Cadeira Gamer", preco: 799.00, quantidade: 2 },
    { nome: "Fone de Ouvido Bluetooth", preco: 129.99, quantidade: 5 },
    { nome: "Webcam HD", preco: 89.90, quantidade: 3 },
    { nome: "Mousepad Gamer", preco: 19.99, quantidade: 8 },
    { nome: "Roteador Wi-Fi", preco: 129.90, quantidade: 6 },
    { nome: "Carregador Portátil", preco: 59.99, quantidade: 9 }
];

// nomes dos produtos com valor maior que 150
for (let produto of produtos) {
    if (produto.preco > 150) {
        console.log(`Nome: ${produto.nome}`);
    }
}

console.log('--------------------------------------')
// Nomes dos produtos com valor menor que 100 e a soma total de cada um e o valor geral
let soma, result = 0;
for (let produto in produtos) {
    if (produtos[produto].preco < 100) {
        soma = produtos[produto].preco * produtos[produto].quantidade;
        result += soma;
        console.log(`Nome: ${produtos[produto].nome} - Total: ${soma.toFixed(2)}`);
    }
}
console.log(`Total Geral: ${result.toFixed(2)}`);

console.log('--------------------------------------')

// Nomes dos produtos e seu valor com quantidade maior que 5
produtos.forEach(produto => {
    if (produto.quantidade > 5) {
        console.log(`Nome: ${produto.nome} - Valor: ${produto.preco}`);
    }
});