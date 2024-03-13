// abstração de objetos no código
class Pessoa { // nome da abstração
    // propriedades nome: tipo
    nome: string
    idade: number
    altura: number
    peso: number
    ra?: string // propriedade opcional
    
    constructor(nome: string, idade: number, altura: number,  peso: number, ra?: string,){ // propriedades necessárias para construção do objeto
        // this = acessar propriedade da própria classe
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
        this.ra = ra
    }

    // pode ter métodos
    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
}

// criação de objetos => utilizar new
const enrico = new Pessoa("enrico", 20, 1.80, 90, "22.00370-3")
const jose = new Pessoa("josé", 32, 2.10, 100)

// herança e polimorfismo

class Animal {
    nome: string

    constructor(nome: string){
        this.nome = nome
    }

    barulho(){
        console.log("AAAAAAAA")
    }
}

class Gato extends Animal {
    barulho(): void {
        console.log("Miau Miau")
    }
}

class Cachorro extends Animal {
    diasDePasseio: number

    constructor(nome: string, diasDePasseio: number){
        super(nome)
        this.diasDePasseio = diasDePasseio
    }

    barulho(): void {
        console.log("Au Au")
    }

    passear(){
        console.log("Passeando")
    }
}

const cachorro1 : Cachorro = new Cachorro("Rex", 4)
const cachorro2 : Animal = new Cachorro("Totó", 3)

cachorro1.passear()
cachorro2.barulho()