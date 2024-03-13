"use strict";
// if => testar uma condição para realizar uma estrutura de código
// else => se a condição do if não foi verdadeira entra no bloco de código
const minhaFaculdade = "Mauá";
if (minhaFaculdade === "Mauá") {
    console.log("Você estuda na Mauá"); // vai entrar aqui
}
else if (minhaFaculdade === "FEI") {
    console.log("Você estuda na FEI"); // não vai entrar aqui
}
else {
    console.log("Você não estuda na Mauá nem na FEI"); // não vai entrar aqui
}
// operador ternario => if, else em apenas uma linha (muito usado)
// condição ? código se for verdade : código se for mentira
const ondeEuEstudo = minhaFaculdade == "Mauá" ? "Você estuda na Mauá" : "Você não estuda na Mauá";
// switch => facilita fazer várias condicionais para testar valores (pode ser escrito com if else, mas não é adequado)
// sempre colocar o break, senão ele vai continuar lendo o resto do switch case mesmo achando o valor desejado
const conhecimento = 4;
switch (conhecimento) {
    case 1:
        console.log("Não sabe nada");
        break;
    case 2:
        console.log("Aprendendo");
        break;
    case 3:
        console.log("Mediano");
        break;
    case 4: // entrará aqui
        console.log("Sabe bem");
        break;
    case 1:
        console.log("Conhecedor");
        break;
    default: // condição que sempre cai senão achar nenhuma
        console.log("Conhecimento não medido");
}
