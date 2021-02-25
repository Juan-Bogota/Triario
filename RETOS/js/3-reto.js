/*
    Se realiza una clase llamada Triangle:
       * tienen un constructor que es la estructura base de la clase 
       * perimeter es el calculo matematico de base y la altura, se calcula la hipotenusa, y la suma
         de los lados es el perimetro, valido para triangulo rectangulo
       * surface es el calculo del area dl triangulo que es la base por altura sobre 2
*/



class Triangle{
    constructor(baseline, height){
        this.baseline = baseline,
        this.height = height
    }

    perimeter(){
        let hipotenusa = Math.sqrt(Math.pow(this.baseline,2) + Math.pow(this.height,2));
        return `The perimeter is ${this.baseline + this.height + hipotenusa}`;
    } 
    
    surface(){
        return `The area is ${(this.baseline * this.height)/2}`;
    }

}

const triangle = new Triangle(3, 4);

console.log(triangle.perimeter());
console.log(triangle.surface());
