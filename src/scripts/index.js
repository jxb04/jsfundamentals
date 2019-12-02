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

let jsonIn = 
`
    [
        {"carId": 123},
        {"carId": 456},
        {"carId": 789}
    ]
`;

let jsonCarIds = JSON.parse(jsonIn);
console.log(jsonCarIds);
console.log(JSON.stringify(jsonCarIds));

let carIds6 = [
    { carid: 123, style: 'sedan'},
    { carid: 456, style: 'convertible'},
    { carid: 789, style: 'sedan'}
];

carIds6.forEach(car => console.log(car));

carIds6.forEach(
    (car, index) => console.log(car, index)
);

let convertibles = carIds6.filter(
    car => car.style === 'convertible'
);
console.log(convertibles);

let result = carIds6.every(
    car => car.carid > 0
);
console.log(result);

car = carIds6.find(
    car => car.carid > 500
);
console.log(car);