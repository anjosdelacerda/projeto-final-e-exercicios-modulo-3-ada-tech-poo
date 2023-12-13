import { Produto } from "./produto.mjs";

export class Single extends Produto {
    preco 
    nome
    artista
    musicas
    constructor(preco, nome, artista, musicas){
        super(preco)

        this.preco = preco 
        this.nome = nome
        this.artista = artista 
        this.musicas = musicas 
        this.tipo = "single"

    }
}

const visions = new Single(29900, 'visions', {nome:'Grimes', idade: 33}, [{nome: 'visions', duracao: 256}])
// console.log(visions)