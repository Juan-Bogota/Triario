/*
    Se realiza una clase llamada Person:
        tienen un constructor que es la estructura base de la clase 
        Calcular IMC se calcula con el peso en KG dividido en la altura en metros al cuadrado
        Es Mayor de Edad evalua si la persona tiene 18 o mas años retorna true de lo contrario retorna false
        obterner RFC es un registro que se forma del nombre, edad e inicial del sexo (ejemplo dummy)
*/

class Person {
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.peso = peso,
        this.altura = altura,
        this.RFC = this.obtenerRFC
    }
    get calcularIMC(){
        return `Su IMC es ${this.peso/(Math.pow(this.altura, 2))}`; 
    }
    get esMayorDeEdad(){
        return (this.edad >= 18) ? true: false;
    }   
    get obtenerRFC(){
        return `${this.nombre}${this.edad}${this.sexo.slice(0,1)}`;
    }

}

const juan = new Person('Juan', 31, 'Masculino', 65, 1.71);
console.log(juan.calcularIMC);
console.log(juan.esMayorDeEdad);
console.log(juan.obtenerRFC);