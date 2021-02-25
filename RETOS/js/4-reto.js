class Person {
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.RFC = this.obtenerRFC()
    }
    calcularIMC(){
        return `Su IMC es ${this.peso/(Math.pow(this.altura, 2))}`; 
    }
    esMayorDeEdad(){
        return (this.edad >= 18) ? true: false;
    }   
    obtenerRFC(){
        return `${this.nombre}${this.edad}${this.sexo.slice(0,1)}`;
    }

}

const juan = new Person('Juan', 31, 'Masculino', 65, 1.71);
console.log(juan.calcularIMC());
console.log(juan.esMayorDeEdad());
console.log(juan.obtenerRFC());