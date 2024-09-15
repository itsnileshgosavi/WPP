class Vehicle{
    make:string;
    model:string;
    year:number
    constructor(make:string,model:string,year:number){
        this.make = make
        this.model = model
        this.year = year
    }
    getinfo(){
        console.log(`The vehicle is made by ${this.make} and model is ${this.model} and year is ${this.year}`)
    }
}

class Car extends Vehicle{
    doors:number
    private isSold:boolean
    constructor(make:string,model:string,year:number, doors:number, isSold:boolean){
        super(make,model,year)
        this.doors = doors
        this.isSold = isSold
    }
    getinfo(){
        console.log(`The car is made by ${this.make} and model is ${this.model} and year is ${this.year} and it has ${this.doors} doors and it is ${this.isSold ? 'sold' : 'not sold'}`)
    }
}

let bmw = new Car('BMW', 'X5', 2020, 5, true);

bmw.getinfo();
let newVehicle = new Vehicle('Ford', 'Mustang', 2021);
newVehicle.getinfo();