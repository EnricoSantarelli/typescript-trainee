// string => valores textuais
const curso: string = "Engenharia"

// number => valores númericos (inteiros ou decimais)
const massa: number = 60.2
const tamanho: number = 10

// boolean => true ou false
const minhaIdade : number = 18
const gostoDePython : boolean = false

// null => variável sem valor explicitamente
const semValor = null

// undefined => variável declarada sem valor (apenas let ou var)
let valorNaoDefinido //undefined

// tipos personalizados => type ou interface
type PessoaType = {
    nome: string,
    idade: number
}
interface PessoaInterface {
    nome: string,
    idade: number
}
type Aluno = {
    nome: string
    ra: string
    idade?: number // parâmetro não obrigatório, pode ser ou não inserido
}

const pessoa1 : PessoaType = {
    nome: "Enrico",
    idade: 20
}

const pessoa2 : PessoaInterface = {
    nome: "Rodrigo",
    idade: 19
}

const alunoSemIdade : Aluno = {
    nome: "Bruno",
    ra: "20.21312-2" 
    // idade não obrigatório não inserida
}

const alunoComIdade : Aluno = {
    nome: "Matheus",
    ra: "22.42132-3",
    idade: 23 // idade não obrigatório inserida
}