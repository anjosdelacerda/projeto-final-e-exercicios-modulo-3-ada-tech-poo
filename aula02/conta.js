class Conta {
    #nome 
    #numero 
    #saldo
    constructor(nome, numero, saldo){
        this.#numero = numero
        this.#nome = nome
        this.#saldo = saldo
    }

    get numero(){
        return this.#numero
    }

    set numero(novoNumero){
        this.#numero = novoNumero
    }

    get nome(){
        return this.#nome
    }

    set nome(novoNome){
        this.#nome = novoNome
    }

    get saldo(){
        return this.#saldo
    }

    set saldo(novoSaldo){
        this.#saldo = novoSaldo
    }

    #validarSaldo(valor){
        return valor < this.#saldo
    }

    sacar(valor){

        const saqueValido = this.#validarSaldo(valor)
        
        if(!saqueValido){
            return "saldo insuficiente"
        }

        this.#saldo = this.#saldo - valor

        return `Você acaba de sacar ${valor} e agora possui o valor de ${this.#saldo} em conta`
    }

}

const nando = new Conta('nando', 1111, 100)
console.log(nando)
console.log(nando.sacar(50))
console.log(nando.sacar(100))
