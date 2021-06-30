//! DATA TYPES
// String
// Number
// Boolean
// Array
// Object
// Loose typing
// Dynamic typing
// not a type safe language

// var student = 'Kenan Deniz';
// let value = 7;
// console.log(student);
// console.log(value);

//! ARRAYS
// var students = ['Kenan', 'Ayşegül', 'Kerem'];
// console.log(students);
// console.log(students[1]);
// students.push('Ahmet');
// console.log(students);
// students[students.length] = 'Hüseyin';
// console.log(students);

//! OBJECTS
// var objects = { name: 'den', city: 'İstanbul' };
// console.log(objects);
// objects.city = 'Canada';
// console.log(objects);

//! LOOSE TYPING
// var number = 7;
// // number = new Object();
// number = 'ken';
// console.log(number);

//! DYNAMIC TYPING
// var customer = { id: 1, name: 'Ken' };

// customer.country = 'Turkey';

// customer.sayHello = function () {
//     console.log('Hello ' + this.name);
// };

// customer.sayHello();

//! FUNCTIONS

//? function signature
// function add(params1, params2) {
//     // do something
//     return params1 + params2;
// }
// console.log(add(5, 7));

//? function without "return"
// function update(params1, params2) {
//     console.log('This is a function that without return statements');
// }
// console.log(update());

//? Default Parameters
// function defaultParams(x, y = 25) {
//     return console.log(x * y);
// }

// function defaultParams2(x, y = 25) {
//     if (y === undefined){
//         y = 0;
//     }
// }

// defaultParams('Success! '); // NaN
// defaultParams(1000);
// defaultParams(45,225);

//? The Arguments Object

var x = findMax(1, 123, 5, 88, 566);

function findMax() {
    var max = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return console.log(max);
}

var x = findMax(1, 123, 5, 88, 566);
