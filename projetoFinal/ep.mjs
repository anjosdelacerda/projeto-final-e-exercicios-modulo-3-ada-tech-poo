import { Single } from "./single.mjs";

export class EP extends Single {
    preco 
    artista 
    nome 
    musicas 
    constructor(preco, artista,nome, musicas){
        super(preco,nome,artista,musicas)

        this.preco = preco 
        this.nome = nome
        this.artista = artista 
        this.musicas = musicas 
        this.tipo = "EP"
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

const oneOfYourGirls = new EP(19999, {nome: 'Troye Sivan', idade: 30}, 'One Of Your Girls EP', [{nome: 'One Of Your Girls', duracao: 333}, {nome: 'One Of Your Girls', duracao: 333}])
// console.log(oneOfYourGirls)