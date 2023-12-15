import {Pessoa} from "./pessoa.mjs" 

export class Artista extends Pessoa {
    nome 
    constructor(nome, idade){
        super(idade)

        this.nome = nome
    }
}

const grimes = new Artista('grimes', 33)
// console.log(grimes)
