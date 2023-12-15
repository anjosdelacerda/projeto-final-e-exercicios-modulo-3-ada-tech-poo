import { Single } from "./single";

export class Vinil extends Single {
    preco 
    artista 
    nome 
    musicas 
    constructor(preco, artista,nome, musicas){
        super(preco,nome,artista,musicas)

        this.tipo = "vinil"
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