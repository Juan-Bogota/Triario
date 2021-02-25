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
