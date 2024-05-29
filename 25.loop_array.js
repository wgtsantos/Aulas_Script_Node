// Capturando e Exibindo valores de um Array com Loop

let valores = [10, 21, 34, 45, 11, 87];
let soma = 0;
// let x = valores.length;

for (let i = 0; i < valores.length; i++) {
    console.log(`Valor ${i}: ${valores[i]}`);
    soma += valores[i];
}

console.log(`Total: ${soma}`);