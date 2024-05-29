// Array ForEach

let frutas = ["laranja", "Uva", "Mamão", "Abacaxi", "Banana", "Pera"];
// frutas.sort();
// frutas.reverse();
let valores = [10, 21, 34, 45, 11, 87, 33];

for (let fruta of frutas) {
    console.log(`=> ${fruta}`)
}

console.log('----------------------------------');

for (let valor in valores) {
    console.log(`=> ${valores[valor]}`)
}

console.log('-----------------------------------');

frutas.forEach(fruta => {
    console.log(`=> ${fruta}`);
});