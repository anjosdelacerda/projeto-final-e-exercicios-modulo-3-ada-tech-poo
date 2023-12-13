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
}

const oneOfYourGirls = new EP(19999, {nome: 'Troye Sivan', idade: 30}, 'One Of Your Girls EP', [{nome: 'One Of Your Girls', duracao: 333}, {nome: 'One Of Your Girls', duracao: 333}])
// console.log(oneOfYourGirls)