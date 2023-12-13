class Circulo {
    raio 
    constructor(raio){
        this.raio = raio
    }

    calcularArea() {
        const area = Math.PI * this.raio ** 2;
        return area;
    }

    calcularCircunferencia() {
        const circunferencia = 2 * Math.PI * this.raio;
        return circunferencia;
    }
}

const meuCirculo = new Circulo (100)

console.log(meuCirculo.calcularArea())
console.log(meuCirculo.calcularCircunferencia())

///

// class Circulo {
    
//     constructor(){
//         this.raio = 100
//     }

//     static calcularArea() {
//         const area = Math.PI * this.raio ** 2;
//         return area;
//     }

//     static calcularCircunferencia() {
//         const circunferencia = 2 * Math.PI * this.raio;
//         return circunferencia;
//     }
// }

// console.log(Circulo.calcularArea())
// console.log(Circulo.calcularCircunferencia())