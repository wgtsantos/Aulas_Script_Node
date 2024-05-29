/* Atividade 13 - Matriz 6 x 6 - exibindo 1 na diagonal esquerda 
e 2 na diagonal direita e 0 nas demais. */

let nuns = [ [], [], [], [], [], [], [], [], [], [] ];
let n = nuns.length;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {  

        nuns[i][j] = 0;

        if (nuns[i][j] === nuns[i][i]) {
            nuns[i][i] = 1;
        }
        if (nuns[i][j] === nuns[i][n - i - 1]) {
            nuns[i][n - i - 1] = 2;
        }
    }
}

console.table(nuns);