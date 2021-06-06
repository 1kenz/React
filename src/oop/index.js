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


// 