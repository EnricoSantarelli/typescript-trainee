"use strict";
// faça um programa de análise de texto
// crie uma variavel e armazene uma string
// conte o número de caracteres (excluindo espaços)
// conte o número total de palavras
// verifique se a string é um palindromo
// verifique se a string é maior que a string = "hipopotomonstrosesquipedaliofobia"
function exemplo1() {
    const texto = "ovo ovo ovo ovo ovo ovo ovo ovo ovo ovo ovo ovo ovo ovo ovo ovo";
    let numCaracteres = 0;
    let numPalavras = 1;
    for (let letra of texto) {
        if (letra !== " ") {
            numCaracteres = numCaracteres + 1;
        }
        else {
            numPalavras = numPalavras + 1;
        }
    }
    console.log(`O número de caracteres é ${numCaracteres}`);
    console.log(`O número de palavras é ${numPalavras}`);
    let textoAoContrario = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoAoContrario = textoAoContrario + texto[i];
    }
    const ehPalindromo = (textoAoContrario === texto);
    console.log(`O texto é um palindromo? ${ehPalindromo}`);
    const stringEnorme = "hipopotomonstrosesquipedaliofobia";
    const textoEhMaior = (texto.length > stringEnorme.length);
    console.log(`O texto é maior que hipopotomonstrosesquipedaliofobia? ${textoEhMaior}`);
}
exemplo1();
