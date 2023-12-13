import { Cliente } from "./cliente.mjs";

export class Funcionario extends Cliente {
    nome 
    sobrenome 
    idade 
    constructor(nome,sobrenome, idade){
        super(nome,sobrenome,idade)

        this.nome = nome 
        this.sobrenome = sobrenome 
        this.idade = idade 
        this.sacola = []
        this.descontoParaFuncionarios = true
    }
}

const pedro = new Funcionario('pedro', 'alves', 34)
// console.log(pedro)
// console.log(pedro.imprimirIdade())