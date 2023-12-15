import { Pessoa } from "./pessoa.mjs"

export class Cliente extends Pessoa{
    nome 
    sobrenome 
    idade 
    constructor(nome, sobrenome, idade){
        super(idade)

        this.nome = nome 
        this.sobrenome = sobrenome 
        this.idade = idade 
        this.sacola = []
    }

    imprimirNome(){
        return `${nome} ${sobrenome}`
    }
}

const nando = new Cliente('nando', 'lacerda', 29)
// console.log(nando)
// console.log(nando.imprimirIdade())