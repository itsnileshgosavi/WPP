"use strict";
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    area() {
        console.log("The area of the reactangle is", this.length * this.width);
    }
    perimeter() {
        console.log("the perimeter of the reactangle is", (this.length + this.width) * 2);
    }
}
let rect = new Rectangle(100, 70);
rect.area();
rect.perimeter();
