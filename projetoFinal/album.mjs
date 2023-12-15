import { Single } from "./single.mjs";

export class Album extends Single {
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
        this.tipo = "album"
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

const bornThisWay = new Album(29999, {nome: 'Lady Gaga', idade: 37}, 'Born This Way', [{nome: 'Heavy Metal Lover', duracao: 333}, {nome: 'Electric Chapel', duracao: 333}])
console.log(bornThisWay)
console.log(Object.getPrototypeOf(bornThisWay))