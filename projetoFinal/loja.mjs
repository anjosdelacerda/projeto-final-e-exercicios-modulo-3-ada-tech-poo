
import {Musica} from './musica.mjs'
import {Artista} from './artista.mjs'
import { Album } from './album.mjs'
import { Cliente } from './cliente.mjs'


class Loja {

    static #contador = 1
    static vitrine = []

    constructor(){
        this.single = this.vitrine.filter((obj) => obj.infos.tipo === 'single')
        this.album = this.vitrine.filter((obj) => obj.infos.tipo === 'album')
        this.ep = this.vitrine.filter((obj) => obj.infos.tipo === 'EP')
        this.vinil = this.vitrine.filter((obj) => obj.infos.tipo === 'vinil')
    }


    static adquirirProduto(obj, qtd){

        const novoProduto = {
            id: Loja.#contador,
            infos: obj,
            quantidade: qtd
        }

        this.vitrine.push(novoProduto)
        this.#aumentarContador()
    }

    static #aumentarContador(){

        Loja.#contador = Loja.#contador + 1

    }

    static imprimirVitrine(){
        return this.vitrine
    }

    static venderProduto(cliente, qtd, id){

        const produto = this.#buscarProduto(id)

        if(!produto){
            return "produto não disponível"
        }

        const conferencia = this.#verificarQuantidades(produto.quantidade, qtd) 

        if(!conferencia){
            return "quantidade não disponível"
        }

        for(let i = 0; i < qtd; i++){
            cliente.sacola.push(produto.infos)
        }

        produto.quantidade = produto.quantidade - qtd

    }

    static #buscarProduto(id){

        const produto = this.vitrine.find((obj) => obj.id === id)

        if(!produto){
            return false
        }

        return produto
    }

    static #verificarQuantidades(qtd1, qtd2){

        if(qtd1 >= qtd2){
            return true
        } else {
            return false
        }
    }

}

const hapax = new Artista('hapax', 34)
const vitriol = new Musica('vitriol', 482)
const listaDeMusicas = [vitriol, vitriol, vitriol, vitriol, vitriol]
const cave = new Album(490000, hapax ,'Cave', listaDeMusicas)

const nando = new Cliente('nando', 'lacerda', 29)

console.log(cave)
Loja.adquirirProduto(cave, 123)
console.log(Loja.imprimirVitrine())
Loja.adquirirProduto(cave, 222)
console.log(Loja.imprimirVitrine())
console.log(nando)
Loja.venderProduto(nando, 2, 1)
console.log(Loja.venderProduto(nando, 2, 1))
console.log(nando)
console.log(Loja.imprimirVitrine())