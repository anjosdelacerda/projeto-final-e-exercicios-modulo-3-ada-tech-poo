import { Cliente } from "./cliente.mjs";

export class Funcionario extends Cliente {
    nome 
    sobrenome 
    idade
    cargo
    constructor(nome,sobrenome, idade, cargo){
        super(nome,sobrenome,idade)

        this.nome = nome 
        this.sobrenome = sobrenome 
        this.idade = idade 
        this.cargo = cargo
        this.sacola = []
        this.descontoParaFuncionarios = true
    }

    imprimirNome(){
        return `${nome} ${sobrenome}, ${this.cargo} na Loja`
    }
}

Funcionario.prototype.verificarDesconto = function () {
    if (this.descontoParaFuncionarios === true) {
        return 'Você tem direito a 20% de desconto.'
    } else {
        return 'Você não tem direito a desconto.'
    }
}

const pedro = new Funcionario('pedro', 'alves', 34, 'gerente')
// console.log(pedro)
// console.log(pedro.imprimirIdade())