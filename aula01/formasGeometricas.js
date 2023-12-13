class Quadrado {
    base
    altura
    cor 
    constructor(base, altura, cor){
        this.base = base 
        this.altura = altura 
        this.cor = cor || "red"
    } 

    calcularArea(){
        return this.base * this.altura
    }

    imprimir(){
        return `<div style='width:${this.base}px; height:${this.altura}px; 
        background-color:${this.cor}'><div>`
    }
}

class Circulo extends Quadrado {
    constructor(base, altura, cor){
        super(base,altura, cor)
    }

    imprimir(){
        return `<div style='width:${this.base}px; height:${this.altura}px; 
        background-color:${this.cor}; border-radius:50%'><div>`
    }

}

class Triangulo extends Quadrado {
    constructor(base, altura, cor){
        super(base, altura, cor)
    }

    imprimir(){
        return `<div style='width:0px; height:$0px; 
        border-left:${this.altura}px solid transparent;border-right:${this.altura}px solid transparent;
        border-bottom:${this.base}px solid ${this.cor}'><div>`
    }
}

const quadradoAzul = new Quadrado(200, 200, "blue")
const circuloRosa = new Circulo(300, 300, "pink")
const trianguloAmarelo = new Triangulo(100, 50, "yellow")

// document.body.innerHTML = quadradoAzul.imprimir()
// document.body.innerHTML = circuloRosa.imprimir()
document.body.innerHTML = trianguloAmarelo.imprimir()