class Animal {
    nome 
    idade 
    especie 
    constructor(nome,idade,especie){
        this.nome = nome 
        this.especie = especie 
        this.idade = idade
    }

    emitirSom(){
        return "..."
    }
}

class Cachorro extends Animal {
    tamanho 
    constructor(nome, especie, idade, tamanho){
        super(nome, especie, idade)

        this.tamanho = tamanho
    }

    emitirSom(){
        return "au au"
    }
}

class Cachorro extends Animal {
    cor 
    constructor(nome, especie, idade, cor){
        super(nome, especie, idade)

        this.cor = cor
    }

    emitirSom(){
        return "miau"
    }
}

