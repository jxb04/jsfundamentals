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
