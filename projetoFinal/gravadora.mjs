import { Artista } from "./artista.mjs"

export class Gravadora {

    static artistas = []
    static #contador = 1
    constructor(){

        this.nomeDaGravadora = 'Sony Music'
        
    }

    static contratarArtista(obj){

        const selo = this.#definirSelo()
        const id = this.#contador 

        this.#aumentarContador()

        const novoArtista = {
            id,
            nome: obj.nome,
            idade: obj.idade,
            selo
        }

        this.artistas.push(novoArtista)

    }

    static #definirSelo(){
        if(this.#contador % 2 === 0){
            return "interscope"
        } else{
            return "columbia"
        }
    }

    static #aumentarContador(){

        this.#contador += 1

    }

    static imprimirArtistas(){
        return this.artistas
    }

    static atualizarArtista(id, nome, idade){

        const artista = this.artistas.find((obj) => obj.id === id)

        if(!artista){
            return "Artista não encontrado"
        }

        nome ? (artista.nome = nome) : (artista.nome = artista.nome)
        idade ? (artista.idade = idade) : (artista.idade = artista.idade)

        return artista

    }

    static deletarArtista(id){

        const novaLista = this.artistas.filter((obj) => obj.id !== id)

        this.artistas = novaLista

        return "Artista demitido"

    }


}

const beyonce = new Artista('Beyonce', 40)
const ladyGaga = new Artista('Lady Gaga', 36)
Gravadora.contratarArtista(beyonce)
console.log(Gravadora.imprimirArtistas())
Gravadora.contratarArtista(ladyGaga)
console.log(Gravadora.imprimirArtistas())
Gravadora.atualizarArtista(1, 'Rihanna', 33)
console.log(Gravadora.imprimirArtistas())
Gravadora.atualizarArtista(1, 'Lana Del Rey')
console.log(Gravadora.imprimirArtistas())
const letrux = new Artista('Letrux', 36)
Gravadora.contratarArtista(letrux)
console.log(Gravadora.imprimirArtistas())
Gravadora.deletarArtista(1)
console.log(Gravadora.imprimirArtistas())