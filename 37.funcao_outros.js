// Funções em Geral

function soma(a, b) {  return a + b; }
function sub(a, b) {  return a - b; }
function mult(a, b) {  return a * b; }
function div(a, b) {  return a / b; }

let result = [ soma, sub, mult, div ];

console.log(result[0](2, 7));