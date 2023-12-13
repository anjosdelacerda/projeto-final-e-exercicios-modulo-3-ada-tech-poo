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
}

const bornThisWay = new Album(29999, {nome: 'Lady Gaga', idade: 37}, 'Born This Way', [{nome: 'Heavy Metal Lover', duracao: 333}, {nome: 'Electric Chapel', duracao: 333}])
// console.log(bornThisWay)