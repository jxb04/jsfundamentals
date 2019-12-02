class Vehicle {
    constructor() {
        this.type = 'car';
    }
    start() {
        retrun `Starting: ${this.type}`;
    }
}

class Car extends Vehicle {

}

let car = new Car();
console.log( car.type );