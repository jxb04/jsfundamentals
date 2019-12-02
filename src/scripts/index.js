class Car {
    constructor(id) {
        this.id = id;
    }
    identify(suffix) {
        return `Car.id: ${this.id} ${suffix}`;
    }
}

let car = new Car(123);
console.log(car.id);
console.log(car.identify('!!!') );
car.id = 456;
console.log(car.id);
