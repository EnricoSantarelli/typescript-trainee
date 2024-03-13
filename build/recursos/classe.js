"use strict";
// abstração de objetos no código
class Pessoa {
    constructor(nome, idade, altura, peso, ra) {
        // this = acessar propriedade da própria classe
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.ra = ra;
    }
    // pode ter métodos
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
}
// criação de objetos => utilizar new
const enrico = new Pessoa("enrico", 20, 1.80, 90, "22.00370-3");
const jose = new Pessoa("josé", 32, 2.10, 100);
// herança e polimorfismo
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    barulho() {
        console.log("AAAAAAAA");
    }
}
class Gato extends Animal {
    barulho() {
        console.log("Miau Miau");
    }
}
class Cachorro extends Animal {
    constructor(nome, diasDePasseio) {
        super(nome);
        this.diasDePasseio = diasDePasseio;
    }
    barulho() {
        console.log("Au Au");
    }
    passear() {
        console.log("Passeando");
    }
}
const cachorro1 = new Cachorro("Rex", 4);
const cachorro2 = new Cachorro("Totó", 3);
cachorro1.passear();
cachorro2.barulho();
