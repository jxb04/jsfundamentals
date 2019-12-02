import '../styles/index.scss';

console.log('webpack starterkit');

let car = { id: 5000, style: 'convertible' };
let {id, style} = car;

console.log(id, style);

function startCars(car1, car2, car3) {
    console.log(car1, car2, car3);
};

let carIds = [1, 2, 3];
startCars(...carIds);

console.log (1 == true);
console.log (1 === true );

let userSettings = null;
let defaultSettings = { name: 'Default'};

console.log ( userSettings || defaultSettings );

userSettings = { name: 'Joe' };
defaultSettings = { name: 'Default'};

console.log ( userSettings || defaultSettings );

console.log ( ( 5 > 4 ? 'yes' : 'no') );

// IIFE immediately invoked function expression
let app = (function() {
    let carid = '123';
    console.log('in function');
    return {};
})();

console.log(app);

// closure
let appClosure = (function() {
    let carid = '123';
    let getId = function () {
        return carid;
    };
    return {
        getId: getId
    };
})();
console.log(appClosure.getId());

function Car (id) {
    this.carId = id;
    this.start = function () {
        console.log('start: ' + this.carId);
    };
};

let vehicle = new Car(123);
vehicle.start();