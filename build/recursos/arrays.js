"use strict";
// array => conjunto de elementos ordenado com o mesmo tipo
const nomesDaSala = ["Enrico", "Rodrigo", "Sergio"];
const idades = [12, 53, 21];
// index => número que possilita acessar cada elemento, começa em 0
nomesDaSala[0]; // Enrico
idades[1]; // 21
// map => função de array que retorna um novo array com a modificação feita
const novasIdades = idades.map((idade) => idade + 1); // [ 14, 22, 54 ]
// forEach => função que faz uma função em cada um dos elementos (não modifica a lista original)
idades.forEach((idade) => { console.log(idade); });
// sort => ordena os arrays em ordem alfabética ou númerica (modifica o array original)
idades.sort(); // [ 13, 21, 53 ]
// filter => retorna um novo array com um filtro aplicado em todos os elementos (não modifica o array original)
const idadesPares = idades.filter((idade) => idade % 2 == 0); // [12]
// lenght => tamanho do array
const numeroDeIdades = idades.length; // 3
