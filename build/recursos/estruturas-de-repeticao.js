"use strict";
// for => executar um bloco de código que você sabe o número de iterações
// inicia variavel (nome qualquer) com o valor inicial, até que valor ela pode ir, soma de 1 em 1 (pode mudar isso se quiser)
for (let i = 0; i <= 10; i++) {
    console.log(i); // 0,1,2,3,4,5,6,7,8,9,10
}
// iterando sobre lista
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of list) {
    console.log(i);
}
// while => executar um bloco de código enquanto uma condição é verdadeira
let contador = 0;
while (contador <= 5) { // quando contador for 6 não entra
    console.log(contador); // 0,1,2,3,4,5
    contador++; // adiciona um ao contador a cada iteração
}
