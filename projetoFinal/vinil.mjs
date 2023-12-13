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
}