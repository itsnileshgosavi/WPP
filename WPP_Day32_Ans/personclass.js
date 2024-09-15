"use strict";
class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    info() {
        console.log(`Person's name is ${this.name} and their age is ${this.age} and they're from ${this.country}`);
    }
}
let person1 = new Person("Nilesh", 26, "India");
let person2 = new Person("Rahul", 25, "India");
person1.info();
person2.info();
