class Forma {
    cor 
    constructor(cor){
        this.cor = cor || "blue"
    }
}

class Circulo extends Forma{
    linha1
    constructor(cor, linha1){
        super(cor)

        this.linha1 = linha1
    }

    imprimir(){
        return `<div style='width:${this.linha1}px; height:${this.linha1}px; 
        background-color:${this.cor}; border-radius:50%'><div>`
    }
}

class Quadrado extends Circulo{
    linha2 
    constructor(cor, linha1, linha2){
        super(cor, linha1)

        this.linha2 = linha2
    }

    imprimir(){
        return `<div style='width:${this.linha}px; height:${this.linha2}px; 
        background-color:${this.cor}'><div>`
    }
}

class Triangulo extends Quadrado{
    linha3
    constructor(cor, linha1, linha2, linha3){
        super(cor, linha1, linha2)

        this.linha3 = linha3
    }

    imprimir(){
        return `<div style='width:0px; height:$0px; 
        border-left:${this.linha1}px solid transparent;border-right:${this.linha2}px solid transparent;
        border-bottom:${this.linha3}px solid ${this.cor}'><div>`
    }
    
    
}