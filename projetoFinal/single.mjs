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

    get preco(){
        return this.preco
    }

    set preco(novoPreco){
        this.preco = novoPreco
    }

    get nome(){
        return this.nome
    }

    set nome(novoNome){
        this.nome = novoNome
    }

    get artista(){
        return this.artista
    }

    set artista(novoArtista){
        this.artista = novoArtista
    }

    get musicas(){
        return this.musicas
    }

    set musicas(novasMusicas){
        this.musicas = novasMusicas

    }
}

const visions = new Single(29900, 'visions', {nome:'Grimes', idade: 33}, [{nome: 'visions', duracao: 256}])
// console.log(visions)