// faça um sistema de gestão de funcionários
// crie uma classe funcionário base com atributos de nome e salario e um método de calcular seu pagamento (retornar seu salário)
// crie uma classe funcionário regular que herde de funcionário e tenha atributos de horas trabalhadas e valor hora e um método que sobrescreve o de calcular seu pagamento (baseado no número de horas de trabalho e valor da hora)
// crie uma classe gerente que herde funcionário e tenha atributos de bonus (number) e de funcionarios regulares (lista da classe funcionario regular) e um método que sobrescreve o de calcular seu pagamento (somando ao salário)
// crie uma classe diretor que herde funcionário e tenha um método das areas que comanda (lista de string) e um método para adicionar áreas e um para remover áreas baseado no nome

function exemplo2(){

    class Funcionario {
        nome: string
        salario: number

        constructor(nome: string, salario: number){
            this.nome = nome
            this.salario = salario
        }

        calcularPagamento() {
            console.log(this.salario)
        }
    }

    class FuncionarioRegular extends Funcionario {
        horasTrabalhadas: number
        valorHora: number

        constructor(horasTrabalhadas: number, valorHora: number, nome: string, salario: number){
            super(nome, salario)
            this.horasTrabalhadas = horasTrabalhadas
            this.valorHora = valorHora
        }   

        calcularPagamento() {
            const salario = this.salario + (this.horasTrabalhadas * this.valorHora)
            console.log(salario)
        }
    }

    class Gerente extends Funcionario {
        bonus: number
        funcionariosRegulares: FuncionarioRegular[]

        constructor(bonus: number, funcionariosRegulares: FuncionarioRegular[], nome: string, salario: number){
            super(nome, salario)
            this.bonus = bonus
            this.funcionariosRegulares = funcionariosRegulares
        }

        calcularPagamento() {
            const salario = this.salario + this.bonus
            console.log(salario)
        }
    }

    class Diretor extends Funcionario {
        areas: string[]

        constructor(areas: string[], nome: string, salario: number){
            super(nome, salario)
            this.areas = areas
        }

        adicionarArea(area: string){
            this.areas.push(area)
        }

        removerArea(area: string){
            this.areas = this.areas.filter((elementos) => elementos != area)
        }
    }

    const diretor1 : Diretor = new Diretor(["Financeiro", "Desenvolvimento"], "Carlos", 1000)
    diretor1.adicionarArea("Design")

    console.log(diretor1.areas)

    diretor1.removerArea("Desenvolvimento")
    console.log(diretor1.areas)

}

exemplo2()