"use strict";
// && => e
// || => ou
// ! => não
// usado para somar condições
let vouNaPandora;
const compreiIngresso = false;
const souMaiorDeIdade = idade >= 18;
const vouPularOMuro = true;
vouNaPandora = ((compreiIngresso && souMaiorDeIdade) || vouPularOMuro); // Só vou na pandora se eu comprei o ingresso e sou maior de idade ou vou pular o muro
