// Arrays Manipulação de Dados

let nomes = ["Marta", "Jonas", "Claudio", "José", "Geralda", "Maria"];

// adicionar um valor no final da lista
nomes.push("Marcela");
console.log(nomes);

// Excluir o último valor da lista
nome = nomes.pop();
console.log(nome);
console.log(nomes);

// Excluir o primeiro valor da lista
nome = nomes.shift();
console.log(nome);
console.log(nomes);

// Inverter os valores da lista
nomes.reverse();
console.log(nomes);

// Ordem alfabética dos valores 
nomes.sort();
console.log(nomes);

// Excluir personalizado
let n1 = nomes.slice(2);
console.log(n1);
let n2 = nomes.slice(1,3);
console.log(n2);
let n3 = nomes.slice(-1);
console.log(n3);