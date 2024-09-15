"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getinfo() {
        console.log(`The vehicle is made by ${this.make} and model is ${this.model} and year is ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors, isSold) {
        super(make, model, year);
        this.doors = doors;
        this.isSold = isSold;
    }
    getinfo() {
        console.log(`The car is made by ${this.make} and model is ${this.model} and year is ${this.year} and it has ${this.doors} doors and it is ${this.isSold ? 'sold' : 'not sold'}`);
    }
}
let bmw = new Car('BMW', 'X5', 2020, 5, true);
bmw.getinfo();
let newVehicle = new Vehicle('Ford', 'Mustang', 2021);
newVehicle.getinfo();
