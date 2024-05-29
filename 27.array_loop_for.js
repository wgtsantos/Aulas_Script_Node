// Ordenando valores do Array

let valores = [10, 21, 34, 45, 11, 87, 33];

for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

console.log('------------------');

for (let i = valores.length - 1; i >= 0 ; i--) {
    console.log(valores[i]);
}

console.log('------------------');

for (let i = 0; i < valores.length ; i += 2) {
    console.log(valores[i]);
}
