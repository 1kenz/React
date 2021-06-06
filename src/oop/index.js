// OOP
// This in a fuction inside an object
// var student = {
//     firstName: 'ken',
//     lastName: 'den',
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
// };
// console.log(student.fullName());

// Object constructor
// this in an object

// function Customer(firstName, lastName, city, country, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.city = city;
//     this.country = country;
//     this.age = age;
// }
// var someCustomer = new Customer('kenan', 'den', 'istanbul', 'turkey', 39);
// console.log(someCustomer.firstName);

// export class Customer {
//     constructor(id, customerNumber) {
//         this.id = id;
//         this.customerNumber = customerNumber;
//     }
// }

// let customer = new Customer(1, '123456');

//! instance prototyping *****
// customer.name = 'Kenan Deniz';
// console.log(customer.name);

//! class prototyping
// Customer.city = 'İstanbul';
// console.log(Customer.city);

// console.log(customer.customerNumber);

// class IndividualCustomer extends Customer {
//     constructor(firstName, id, customerNumber) {
//         super(id, customerNumber);
//         this.firstName = firstName;
//     }
// }

// class CorporateCustomer extends Customer {
//     constructor(companyName, id, customerNumber) {
//         super(id, customerNumber);
//         this.companyName = companyName;
//     }
// }

// function Customer(firstName, lastName, city, country, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.city = city;
//     this.country = country;
//     this.age = age;
// }
// var someCustomer = new Customer('kenan', 'deniz', 'istanbul', 'turkey', 39);
// console.log(someCustomer.firstName);

// Customer.prototype.eMail = 'kenden@gmail.com';
// Customer.prototype.fullName = function () {
//     return this.firstName + ' ' + this.lastName;
// };
// console.log(someCustomer.eMail);
// console.log(someCustomer.fullName());

//! CLOSURES

// var counter = 0;

// function add() {
//     counter += 1;
//     return console.log(counter);
// }
// add();
// add();
// add();
// add();

// function someOtherFunction() {
//     counter += 10;
// }

// someOtherFunction();
// someOtherFunction();

//! closures
// var add = (function () {
//     var counter = 0;
//     return function () {
//         return console.log((counter += 1));
//     };
// })();

//! CLASSES
// constructor
// fields (public or private)
// functions
// static members

// function Customer(firstName, lastName) {
//     // constructor
//     this.firstName = firstName; // public
//     this.lastName = lastName;

//     var someField = 'some value'; // private

//     this.sendProduct = function () {
//         // public operation use this
//         console.log('Product sent!');
//     };
// }

// var ken = new Customer('ken', 'den');
// console.log(ken);

//! INHERTANCE
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    // add function
}

function Student(favoriteCourse) {
    this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person('ken', 'den'); // inheritance

var ken = new Student('Programming');

console.log(
    ken.firstName + ' ' + ken.lastName + ' loves ' + ken.favoriteCourse
);
