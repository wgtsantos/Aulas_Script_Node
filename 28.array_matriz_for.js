// Exibindo valores de uma matriz com For loop

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// i => linha - j => coluna

// Exibe todos os numeros da matriz
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i].length);
    for (let j = 0; j < numeros[i].length; j++) {   
        console.log(`Linha ${i} e Coluna ${j}: ${numeros[i][j]}`);
    }
}

// Exibe somente os numeros na diagonal = esquerda pra direita
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i][i]);
}

// Exibe somente os numeros na diagonal = direita pra esquerda
let n = numeros.length;
for (let i = 0; i < n; i++) {
    console.log(numeros[i][n - i - 1]);
}