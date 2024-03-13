"use strict";
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
