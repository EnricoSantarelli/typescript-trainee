"use strict";
// funções sem parâmetro ou retorno
function grita() {
    console.log("AAAAAAAAAAA");
}
// funções com parâmetros e sem retorno
function soma(num1, num2) {
    console.log(num1 + num2);
}
// funções com parâmetros e retorno
function multiplica(num1, num2) {
    return num1 * num2; // ao chamar a função, ela terá o valor da multiplicação
}
const multiplicacao = multiplica(2, 3); // multiplicacao tera o valor 6
// arrow functions => funções muito importantes!! (armazena a função em uma variável)
const subtrai = (num1, num2) => {
    return num1 - num2;
};
const subtracao = subtrai(4, 2); // chamada da função normal
