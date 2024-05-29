// Filtrar elementos do Array

let nomes = ["Marta", "Jonas", "Claudio", "José", "Geralda", "Maria"];

let numeros = [12, 7, 8, 18, 22, 45, 67];

let usuarios = [ 
    { nome: "Marta Silva", idade: 23, email: "marta@gmail.com"  },
    { nome: "Marcos Sena", idade: 18, email: "marcos@gmail.com" },
    { nome: "João Marcos", idade: 25, email: "Jaum@gmail.com" },
    { nome: "Silvana Lopes", idade: 16, email: "silvana@gmail.com" }
];

let filtrar_nome = nomes.filter(nome => nome.toLowerCase().includes('j'));
console.log(filtrar_nome);

let filtrar_nums = numeros.filter(numero => numero < 19);
console.log(filtrar_nums);

let filtrar_menor = usuarios.filter(usuario => usuario.idade < 19);
console.log(filtrar_menor);
